<?php
/**
 * Plugin Name: Christmas Blocks
 * Description: Add cute christmas decorations to your website.
 * Text Domain: christmas-blocks
 * Author: Poena
 * Author URI: https://theme.tips
 * Version: 1.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue the blocks if the block editor is available.
 */
if ( function_exists( 'register_block_type' ) ) {
	function christmas_blocks() {
		wp_enqueue_script( 'christmas-blocks-js', plugins_url( '/js/block.js', __FILE__ ), array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
		), time() );

		$christmas_blocks_candy_image_url = array( 'candy_image_url' => plugins_url( '/images/candy.png', __FILE__ ) );
		$christmas_blocks_assorted_image_url = array( 'assorted_image_url' => plugins_url( '/images/assorted_candies.png', __FILE__ ) );
		$christmas_blocks_candycane_image_url = array( 'candycane_image_url' => plugins_url( '/images/candycaneheart.png', __FILE__ ) );
		$christmas_blocks_tree_image_url = array( 'tree_image_url' => plugins_url( '/images/christmastree.png', __FILE__ ) );
		$christmas_blocks_gifts_image_url = array( 'gifts_image_url' => plugins_url( '/images/gifts.png', __FILE__ ) );
		$christmas_blocks_santa_image_url = array( 'santa_image_url' => plugins_url( '/images/santa.png', __FILE__ ) );
		$christmas_blocks_snowman_image_url = array( 'snowman_image_url' => plugins_url( '/images/snowman.png', __FILE__ ) );
		$christmas_blocks_gingerbread_image_url = array( 'gingerbread_image_url' => plugins_url( '/images/gingerbread.png', __FILE__ ) );
		wp_localize_script( 'christmas-blocks-js', 'christmas_blocks_candy', $christmas_blocks_candy_image_url );
		wp_localize_script( 'christmas-blocks-js', 'christmas_blocks_assorted', $christmas_blocks_assorted_image_url );
		wp_localize_script( 'christmas-blocks-js', 'christmas_blocks_candycane', $christmas_blocks_candycane_image_url );
		wp_localize_script( 'christmas-blocks-js', 'christmas_blocks_tree', $christmas_blocks_tree_image_url );
		wp_localize_script( 'christmas-blocks-js', 'christmas_blocks_gifts', $christmas_blocks_gifts_image_url );
		wp_localize_script( 'christmas-blocks-js', 'christmas_blocks_santa', $christmas_blocks_santa_image_url );
		wp_localize_script( 'christmas-blocks-js', 'christmas_blocks_snowman', $christmas_blocks_snowman_image_url );
		wp_localize_script( 'christmas-blocks-js', 'christmas_blocks_gingerbread', $christmas_blocks_gingerbread_image_url );
	}
	add_action( 'enqueue_block_editor_assets', 'christmas_blocks' );

	function christmas_blocks_styles() {
		wp_enqueue_style( 'christmas-blocks', plugins_url( '/css/blocks.css', __FILE__ ) );
	}
	add_action( 'enqueue_block_assets', 'christmas_blocks_styles' );


	add_filter( 'block_categories', 'christmas_blocks_category', 10, 2);
	
	function christmas_blocks_category( $categories ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug' => 'christmas-blocks',
					'title' => __( 'Christmas', 'christmas-blocks' ),
				),
			)
		);
	}
}
