import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import attributes from './attributes';
import edit from './edit';
import save from './save';
import example from './example';
import metadata from '../block.json';
import './style.scss';
import './editor.scss';

const { name, icon, category, keywords, supports } = metadata;

registerBlockType( name, {
	title: __( 'Testimonial', 'ib-testimonial' ),
	description: __(
		'A block to display testimonial on the site.',
		'ib-testimonial'
	),
	icon,
	category,
	keywords,
	supports,
	attributes,
	edit,
	save,
	example,
	styles: [
		{
			name: 'below-content',
			label: __( 'Style 1', 'ib-testimonial' ),
			isDefault: true,
		},
		{
			name: 'above-content',
			label: __( 'Style 2', 'ib-testimonial' ),
			isDefault: false,
		},
		{
			name: 'left-content',
			label: __( 'Style 3', 'ib-testimonial' ),
			isDefault: false,
		},
		{
			name: 'right-content',
			label: __( 'Style 4', 'ib-testimonial' ),
			isDefault: false,
		},
	],
} );
