<?php
// This file is generated. Do not modify it manually.
return array(
	'wp-accordion' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/wp-accordion',
		'version' => '0.1.0',
		'title' => 'WP Accordion',
		'category' => 'text',
		'icon' => 'editor-ul',
		'description' => 'An accordion block for WordPress.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'typography' => array(
				'fontSize' => false
			),
			'color' => array(
				'gradients' => false,
				'linkColor' => false
			)
		),
		'textdomain' => 'wp-accordion',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'My Accordion'
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'individualItemBgColor' => array(
				'type' => 'boolean',
				'default' => false
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Accordion Title 1',
						'description' => 'Accordion Description 1',
						'backgroundColor' => '#ffffff'
					)
				)
			)
		)
	)
);
