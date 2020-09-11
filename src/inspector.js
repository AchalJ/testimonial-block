/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { AdvancedRangeControl } from './components';
import { ImageControl } from './components';

const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		contentFontSizeDesktop,
		contentFontSizeTablet,
		contentFontSizeMobile,
		imageBorderRadius,
		nameFontSizeDesktop,
		nameFontSizeTablet,
		nameFontSizeMobile,
		titleFontSize,
		titleFontSizeTablet,
		titleFontSizeMobile,
		imagePosition,
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Image', 'ib-testimonial' ) }>
				<ImageControl
					i18n={ {
						imageSize: __( 'Image Size', 'ib-testimonial' ),
						uploadImage: __(
							'Choose or Upload an image',
							'ib-testimonial'
						),
					} }
					value={ attributes.imageData }
					onChange={ ( imageData ) => {
						setAttributes( { imageData } );
					} }
					enableImageSizes
				/>

				<SelectControl
					label={ __( 'Image Position', 'ib-testimonial' ) }
					value={ imagePosition }
					options={ [
						{
							label: __( 'Left', 'ib-testimonial' ),
							value: 'left',
						},
						{ label: __( 'Top', 'ib-testimonial' ), value: 'top' },
						{
							label: __( 'Right', 'ib-testimonial' ),
							value: 'right',
						},
					] }
					onChange={ ( value ) => {
						setAttributes( { imagePosition: value } );
					} }
				/>
			</PanelBody>
			<PanelBody
				title={ __( 'Customize', 'ib-testimonial' ) }
				initialOpen={ false }
			>
				<AdvancedRangeControl
					label={ __( 'Content Font Size', 'ib-testimonial' ) }
					value={ {
						desktop: contentFontSizeDesktop,
						tablet: contentFontSizeTablet,
						mobile: contentFontSizeMobile,
					} }
					onChange={ ( value, device ) => {
						if ( 'desktop' === device ) {
							setAttributes( { contentFontSizeDesktop: value } );
						}
						if ( 'tablet' === device ) {
							setAttributes( { contentFontSizeTablet: value } );
						}
						if ( 'mobile' === device ) {
							setAttributes( { contentFontSizeMobile: value } );
						}
					} }
				/>

				<AdvancedRangeControl
					label={ __( 'Name Font Size', 'ib-testimonial' ) }
					value={ {
						desktop: nameFontSizeDesktop,
						tablet: nameFontSizeTablet,
						mobile: nameFontSizeMobile,
					} }
					onChange={ ( value, device ) => {
						if ( 'desktop' === device ) {
							setAttributes( { nameFontSizeDesktop: value } );
						}
						if ( 'tablet' === device ) {
							setAttributes( { nameFontSizeTablet: value } );
						}
						if ( 'mobile' === device ) {
							setAttributes( { nameFontSizeMobile: value } );
						}
					} }
				/>

				<AdvancedRangeControl
					label={ __( 'Title Font Size', 'ib-testimonial' ) }
					value={ {
						desktop: titleFontSize,
						tablet: titleFontSizeTablet,
						mobile: titleFontSizeMobile,
					} }
					onChange={ ( value, device ) => {
						if ( 'desktop' === device ) {
							setAttributes( { titleFontSize: value } );
						}
						if ( 'tablet' === device ) {
							setAttributes( { titleFontSizeTablet: value } );
						}
						if ( 'mobile' === device ) {
							setAttributes( { titleFontSizeMobile: value } );
						}
					} }
				/>

				<RangeControl
					label={ __( 'Image Border Radius', 'ib-testimonial' ) }
					value={ imageBorderRadius }
					onChange={ ( value ) =>
						setAttributes( { imageBorderRadius: value } )
					}
					min={ 0 }
					max={ 100 }
					step={ 1 }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
