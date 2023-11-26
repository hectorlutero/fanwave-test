<?php

namespace GoDaddy\WordPress\MWC\Core\Features\Commerce\Inventory\Providers\Contracts;

use GoDaddy\WordPress\MWC\Core\Features\Commerce\Inventory\Providers\DataObjects\DeleteLevelInput;

interface CanDeleteLevelsContract
{
    /**
     * Deletes the item level.
     *
     * @param DeleteLevelInput $input
     *
     * @return bool
     */
    public function delete(DeleteLevelInput $input) : bool;
}
