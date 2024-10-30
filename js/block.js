/**
 * Christmas Blocks
 */

( function() {
	var __ = wp.i18n.__, el = wp.element.createElement;

	/** Custom Christmas tree icon */
	const christmas_blocks_icon = el('svg', { width: 20, height: 20 },
		el('path', { d: "M11,19.37v-2c1.91.4,8.07,2.16,8.81,1.36,1-1.08-3.29-4-5.23-6.9-.35-.53,3.28.95,3.7-.18.62-1.65-4.86-4.23-4.61-4.41.77-.54,2.17.28,2.79-.16C17.5,6.31,11.05,0,10,0S2.33,6.24,3.5,7.08c.62.44,2-.38,2.79.16.25.18-5.23,2.76-4.61,4.41.42,1.12,4.05-.35,3.7.18C3.44,14.78-.85,17.65.15,18.73c.74.8,7-.16,8.81-1.36v2" })
	);

	/** Our save is identical for all blocks, so lets make this simple.
	 * Add an empty alt tag since the blocks are decorative;
	*/
	const christmas_save = function (props) {
		return el(
			'img',
			{ src: props.attributes.url, alt: "" },
		);
	}

	wp.blocks.registerBlockType('christmas-blocks/candy', {
		title: __('Christmas: Candy', 'christmas-blocks'),
		keywords: ['image', 'christmas'],
		icon: christmas_blocks_icon,
		category: 'christmas-blocks',
		attributes: {
			url: { type: 'string' },
			alt: { type: 'string' },
		},

		edit: function (props) {
			props.setAttributes({ url: christmas_blocks_candy.candy_image_url, });

			return el(
				'img',
				{ className: props.className, src: props.attributes.url, alt: __('Christmas Candy (decorative image)', 'christmas-blocks') },
			);
		},
		
		save: christmas_save,
	});

	wp.blocks.registerBlockType('christmas-blocks/assorted', {
		title: __('Christmas: Assorted Candies', 'christmas-blocks'),
		keywords: ['image', 'christmas'],
		icon: christmas_blocks_icon,
		category: 'christmas-blocks',
		attributes: {
			url: { type: 'string' },
			alt: { type: 'string' },
		},

		edit: function (props) {
			props.setAttributes({ url: christmas_blocks_assorted.assorted_image_url, });

			return el(
				'img',
				{ className: props.className, src: props.attributes.url, alt: __('Assorted Christmas Candies (decorative image)', 'christmas-blocks') },
			);
		},

		save: christmas_save,
	});

	wp.blocks.registerBlockType('christmas-blocks/tree', {
		title: __('Christmas: Tree', 'christmas-blocks'),
		keywords: ['image', 'christmas'],
		icon: christmas_blocks_icon,
		category: 'christmas-blocks',
		attributes: {
			url: { type: 'string' },
			alt: { type: 'string' },
		},

		edit: function (props) {
			props.setAttributes({ url: christmas_blocks_tree.tree_image_url, });

			return el(
				'img',
				{ className: props.className, src: props.attributes.url, alt: __('Christmas Tree (decorative image)', 'christmas-blocks') },
			);
		},

		save: christmas_save,
	});

	wp.blocks.registerBlockType('christmas-blocks/gifts', {
		title: __('Christmas: Gifts', 'christmas-blocks'),
		keywords: ['image', 'christmas'],
		icon: christmas_blocks_icon,
		category: 'christmas-blocks',
		attributes: {
			url: { type: 'string' },
			alt: { type: 'string' },
		},

		edit: function (props) {
			props.setAttributes({ url: christmas_blocks_gifts.gifts_image_url, });

			return el(
				'img',
				{ className: props.className, src: props.attributes.url, alt: __('Christmas Gifts (decorative image)', 'christmas-blocks') },
			);
		},

		save: christmas_save,
	});

	wp.blocks.registerBlockType('christmas-blocks/santa', {
		title: __('Christmas: Santa', 'christmas-blocks'),
		keywords: ['image', 'christmas'],
		icon: christmas_blocks_icon,
		category: 'christmas-blocks',
		attributes: {
			url: { type: 'string' },
			alt: { type: 'string' },
		},

		edit: function (props) {
			props.setAttributes({ url: christmas_blocks_santa.santa_image_url, });

			return el(
				'img',
				{ className: props.className, src: props.attributes.url, alt: __('Santa (decorative image)', 'christmas-blocks') },
			);
		},

		save: christmas_save,
	});

	wp.blocks.registerBlockType('christmas-blocks/snowman', {
		title: __('Christmas: Snowman', 'christmas-blocks'),
		keywords: ['image', 'christmas'],
		icon: christmas_blocks_icon,
		category: 'christmas-blocks',
		attributes: {
			url: { type: 'string' },
			alt: { type: 'string' },
		},

		edit: function (props) {
			props.setAttributes({ url: christmas_blocks_snowman.snowman_image_url, });

			return el(
				'img',
				{ className: props.className, src: props.attributes.url, alt: __('Snowman (decorative image)', 'christmas-blocks') },
			);
		},

		save: christmas_save,
	});

	wp.blocks.registerBlockType('christmas-blocks/candycane', {
		title: __('Christmas: Candy Cane', 'christmas-blocks'),
		keywords: ['image', 'christmas'],
		icon: christmas_blocks_icon, 
		category: 'christmas-blocks',
		attributes: {
			url: { type: 'string' },
			alt: { type: 'string' }
		},

		edit: function (props) {
			props.setAttributes({ url: christmas_blocks_candycane.candycane_image_url } );
			return el(
				'img',
				{ className: props.className, src: props.attributes.url, alt: __('Christmas Candy Cane (decorative image)', 'christmas-blocks') },
			);
		},

		save: christmas_save,
	});

	wp.blocks.registerBlockType( 'christmas-blocks/gingerbread', {
		title: __( 'Christmas: Gingerbread', 'christmas-blocks' ),
		keywords: [ 'image', 'christmas' ],
		icon: christmas_blocks_icon,
		category: 'christmas-blocks',
		attributes: {
			url: { type: 'string' },
			alt: { type: 'string' }
		},

		edit: function( props ) {
			props.setAttributes({ url: christmas_blocks_gingerbread.gingerbread_image_url } );
			return el(
				'img',
				{ className: props.className, src: props.attributes.url, alt: __('Christmas Gingerbread (decorative image)', 'christmas-blocks') },
			);
		},

		save: christmas_save,

	});

})();
