<?php

namespace GoDaddy\WordPress\MWC\Core\Features\Commerce\Catalog\DataStores\Traits;

use Exception;
use GoDaddy\WordPress\MWC\Common\Exceptions\SentryException;
use GoDaddy\WordPress\MWC\Common\Helpers\ArrayHelper;
use GoDaddy\WordPress\MWC\Common\Helpers\TypeHelper;
use GoDaddy\WordPress\MWC\Core\Features\Commerce\Catalog\CatalogIntegration;
use GoDaddy\WordPress\MWC\Core\Features\Commerce\Catalog\Operations\CreateOrUpdateProductOperation;
use GoDaddy\WordPress\MWC\Core\Features\Commerce\Catalog\Services\Contracts\ProductsServiceContract;
use GoDaddy\WordPress\MWC\Core\Features\Commerce\Catalog\Services\ProductsService;
use GoDaddy\WordPress\MWC\Core\Features\Commerce\Commerce;
use GoDaddy\WordPress\MWC\Core\Features\Commerce\Exceptions\ProductNotCreatableException;
use GoDaddy\WordPress\MWC\Core\WooCommerce\Adapters\ProductAdapter;
use WC_Product;

/**
 * Trait for Commerce Catalog product data store CRUD operations.
 */
trait HasProductPlatformDataStoreCrudTrait
{
    /** @var ProductsServiceContract */
    protected ProductsServiceContract $productsService;

    /**
     * Creates or updates the product at the Commerce platform.
     *
     * @param WC_Product $product
     * @return void
     */
    protected function createOrUpdateProductInPlatform(WC_Product $product) : void
    {
        if (! $this->shouldWriteProductToCatalog($product)) {
            return;
        }

        try {
            $nativeProduct = ProductAdapter::getNewInstance($product)->convertFromSource();
            $operation = CreateOrUpdateProductOperation::fromProduct($nativeProduct);

            $this->productsService->createOrUpdateProduct($operation);
        } catch(ProductNotCreatableException $exception) {
            // Product is not allowed to be created, as it did not pass validation. This is fine and not reportable.
            // For example, it might mean it was a draft product that we do not want to create.
        } catch (Exception $exception) {
            SentryException::getNewInstance(sprintf('An error occurred trying to create or update a remote record for a product: %s', $exception->getMessage()), $exception);
        }
    }

    /**
     * Determines if we should write a product to the Commerce platform.
     *
     * @param WC_Product $product
     * @return bool
     */
    protected function shouldWriteProductToCatalog(WC_Product $product) : bool
    {
        if (! CatalogIntegration::hasCommerceCapability(Commerce::CAPABILITY_WRITE)) {
            return false;
        }

        // do not send auto-draft products to Catalog
        $productStatus = $product->get_status();

        /*
         * @NOTE: We don't actually want to write `draft` products either, but we catch those at a later date to account for
         * the scenario where a product was fully published, written to the platform, then later converted to a draft
         * in WooCommerce. In that instance we still need to _update_ the product in the Platform to set `active = false`.
         * That's why we allow it to pass through this check, and we'll account for it differently later on.
         * @see ProductsService::validateShouldCreateProduct()
         */
        if (! $productStatus || ArrayHelper::contains(['new', 'auto-draft'], $productStatus)) {
            return false;
        }

        return true;
    }

    /**
     * Creates a new product.
     *
     * @param WC_Product $product
     * @return void
     */
    public function create(&$product) : void
    {
        // Temporarily write locally first to ensure there's always a local ID to send.
        parent::create($product); /* @phpstan-ignore-line */

        $product = $this->transformProduct($product);

        $this->createOrUpdateProductInPlatform($product);
    }

    /**
     * Reads a product.
     *
     * @param $product
     * @return void
     * @throws Exception
     */
    public function read(&$product) : void
    {
        // @TODO implement this method {@unfulvio 2023-03-13}
        parent::read($product); /* @phpstan-ignore-line */
    }

    /**
     * Updates a product.
     *
     * @param WC_Product $product
     * @return void
     */
    public function update(&$product) : void
    {
        $product = $this->transformProduct($product);

        if ($product->get_changes()) {
            $this->createOrUpdateProductInPlatform($product);
        }

        parent::update($product); /* @phpstan-ignore-line */
    }

    /**
     * Deletes a product.
     *
     * @param WC_Product $product
     * @param array<string, mixed> $args
     * @return void|bool
     */
    public function delete(&$product, $args = [])
    {
        // @TODO implement this method {@unfulvio 2023-03-13}
        // in WooCommerce the delete method can either return void or bool
        return parent::delete($product, $args);
    }

    /**
     * Allows child implementations of this class to transform the product before it is returned.
     *
     * @param WC_Product $product
     * @return WC_Product
     */
    protected function transformProduct(WC_Product $product) : WC_Product
    {
        try {
            $sku = $product->get_sku('edit');

            if (empty($sku)) {
                $sku = $this->generateProductSku($product);
            }

            $product->set_sku($this->ensureUniqueSku(TypeHelper::int($product->get_id(), 0), $sku));
        } catch (Exception $exception) {
            new SentryException($exception->getMessage(), $exception);
        }

        return $product;
    }

    /**
     * Generates a product slug using its slug and ID.
     *
     * E.g. {slug}-{id}: blue-t-shirt-123
     *
     * @param WC_Product $product
     * @return string
     */
    protected function generateProductSku(WC_Product $product) : string
    {
        $id = TypeHelper::int($product->get_id(), 0);
        $slug = TypeHelper::string($product->get_slug(), '');

        if (empty($slug)) {
            $slug = sanitize_title($product->get_name('edit'));
        }

        return sprintf('%s-%s', $slug, $id);
    }

    /**
     * Validates a SKU to be unique.
     *
     * If the SKU is not unique, it will append a -n to the end of the slug, where n is the number of times the SKU has been generated until unique.
     *
     * @param int $productId
     * @param string $sku
     * @return string
     */
    protected function ensureUniqueSku(int $productId, string $sku) : string
    {
        $originalSku = $sku;
        $count = 1;

        while (! wc_product_has_unique_sku($productId, $sku)) {
            $sku = sprintf('%s-%s', $originalSku, $count);
            $count++;
        }

        return $sku;
    }
}
