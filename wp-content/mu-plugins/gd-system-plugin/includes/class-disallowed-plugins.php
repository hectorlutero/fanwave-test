<?php

namespace WPaaS;

if ( ! defined( 'ABSPATH' ) ) {

	exit;

}

final class Disallowed_Plugins {

	/**
	 * Instance of the API.
	 *
	 * @var API_Interface
	 */
	private $api;

	/**
	 * Array of disallowed plugins to deactivate.
	 *
	 * @var array
	 */
	private $found = [];

	/**
	 * Class constructor.
	 *
	 * @param API_Interface $api
	 */
	public function __construct( API_Interface $api ) {

		$this->api = $api;

		add_action( 'admin_enqueue_scripts', [ $this, 'admin_enqueue_scripts' ] );
		add_action( 'activate_plugin', [ $this, 'activate_plugin' ], PHP_INT_MAX, 2 );

		add_filter( 'plugin_action_links', [ $this, 'plugin_action_links' ], PHP_INT_MAX, 2 );
		add_filter( 'plugin_install_action_links', [ $this, 'plugin_install_action_links' ], PHP_INT_MAX, 2 );

	}

	/**
	 * Enqueue scripts and styles.
	 *
	 * @action admin_enqueue_scripts
	 *
	 * @param string $hook
	 */
	public function admin_enqueue_scripts( $hook ) {

		if ( ! in_array( $hook, [ 'plugin-install.php', 'plugins.php' ], true ) ) {

			return;

		}

		$rtl    = is_rtl() ? '-rtl' : '';
		$suffix = SCRIPT_DEBUG ? '' : '.min';

		wp_enqueue_script( 'wpaas-tip', Plugin::assets_url( "js/jquery-tip{$suffix}.js" ), [ 'jquery' ], Plugin::version(), false );

		wp_enqueue_style( 'wpaas-tip', Plugin::assets_url( "css/jquery-tip{$rtl}{$suffix}.css" ), [], Plugin::version() );

	}

	/**
	 * Catch disallowed plugins when they are activated.
	 *
	 * @action activate_plugin
	 *
	 * @param string $basename
	 * @param bool   $network_wide
	 */
	public function activate_plugin( $basename, $network_wide ) {

		if ( ! $this->is_disallowed( $basename ) ) {

			return;

		}

		$this->found[] = $basename;

		if ( ! has_action( 'shutdown', [ $this, 'deactivate' ] ) ) {

			add_action( 'shutdown', [ $this, 'deactivate' ] );

		}

		$plugin_data = get_plugin_data( trailingslashit( WP_PLUGIN_DIR ) . $basename );

		Admin\Growl::add( sprintf( /* translators: Name of the disallowed plugin */ esc_html__( '%s is not allowed on our system. It has been automatically deactivated.', 'gd-system-plugin' ), $plugin_data['Name'] ) );

	}

	/**
	 * Plugin list table action links.
	 *
	 * @filter plugin_action_links
	 *
	 * @param  array  $links
	 * @param  string $plugin
	 *
	 * @return array
	 */
	public function plugin_action_links( array $links, $plugin ) {

		if ( isset( $links['activate'] ) && $this->is_disallowed( $plugin ) ) {

			unset( $links['edit'] );

			$links['activate'] = $this->message( is_rtl() ? 'left' : 'right' );

		}

		return $links;

	}

	/**
	 * Install action links for a plugin.
	 *
	 * @filter plugin_install_action_links
	 *
	 * @param  array $links
	 * @param  array $plugin
	 *
	 * @return array
	 */
	public function plugin_install_action_links( array $links, array $plugin ) {

		return $this->is_disallowed( $plugin ) ? [ $this->message( is_rtl() ? 'right' : 'left' ) ] : $links;

	}

	/**
	 * Deactivate all disallowed plugins found.
	 *
	 * @action shutdown
	 */
	public function deactivate() {

        /** Logg user action */
        $log_message = 'Disallowed plugins deactivated: ';
        $fount_plugins = $this->found;

        if (is_array($fount_plugins)) {
            foreach ($fount_plugins as $plugin) {
                $log_message .= $plugin . ' ';
            }
        } elseif (is_string($fount_plugins)) {
            $log_message .= $fount_plugins;
        }
        $GLOBALS['wpaas_activity_logger']->log_sp_action(get_current_user_id(), $log_message );

		deactivate_plugins( $this->found );

	}

	/**
	 * Check if a plugin is disallowed.
	 *
	 * @param  string|array $plugin
	 *
	 * @return bool
	 */
	private function is_disallowed( $plugin ) {

		// Ignore a special case where we are spoofing the Worker in the list view.
		if ( Worker::BASENAME === $plugin && filter_input( INPUT_GET, 'showWorker' ) ) {

			return false;

		}

		if ( is_array( $plugin ) && ( empty( $plugin['slug'] ) || empty( $plugin['version'] ) ) ) {

			return false;

		}

		if ( ! is_array( $plugin ) ) {

			$data   = get_plugin_data( trailingslashit( WP_PLUGIN_DIR ) . $plugin );
			$plugin = [
				'slug'    => $this->get_plugin_slug( $plugin ),
				'version' => $data['Version'],
			];

		}

		foreach ( $this->api->get_disallowed_plugins() as $disallowed_plugin ) {

			if (
				0 === strcasecmp( $plugin['slug'], $disallowed_plugin['name'] )
				&&
				version_compare( $plugin['version'], $disallowed_plugin['minimumVersion'], '>=' )
				&&
				version_compare( $plugin['version'], $disallowed_plugin['maximumVersion'], '<=' )
			) {

				return true;

			}

		}

		return false;

	}

	/**
	 * Converts a plugin basename back into a friendly slug.
	 *
	 * From utils-wp.php (wp-cli)
	 *
	 * @param  string $basename
	 *
	 * @return string
	 */
	private function get_plugin_slug( $basename ) {

		return ( false === strpos( $basename, '/' ) ) ? basename( $basename, '.php' ) : dirname( $basename );

	}

	/**
	 * Message to display for disallowed plugins.
	 *
	 * @param  string $direction
	 *
	 * @return string
	 */
	private function message( $direction = 'left' ) {

		$direction = wp_is_mobile() ? 'top' : $direction;

		return sprintf(
			'<span class="wpaas-blacklisted-plugin">%s <a href="javascript:void(0);" class="wpaas-tip" data-tooltip="%s" data-tooltip-direction="%s"><span class="dashicons-before dashicons-editor-help"></span></a></span>',
			__( 'Not Available', 'gd-system-plugin' ),
			__( 'This plugin is not allowed on our system due to performance, security, or compatibility concerns. Please contact support with any questions.', 'gd-system-plugin' ),
			esc_attr( $direction )
		);

	}

}
