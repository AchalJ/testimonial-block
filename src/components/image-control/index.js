/**
 * WordPress dependencies
 */
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

import {
	BaseControl,
	Button,
	ResponsiveWrapper,
	SelectControl,
	Spinner,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';

import './editor.scss';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

const ImageControl = ( props ) => {
	const { image, i18n } = props;
	const defaultState = {
		id: undefined,
		alt: '',
		size: 'thumbnail',
		url: '',
	};
	const imageObj = props.value || defaultState;
	const imageId = imageObj.id;
	const imageSize = imageObj.size || 'thumbnail';

	const labels = {
		uploadImage:
			i18n && i18n.uploadImage ? i18n.uploadImage : __( 'Upload image' ),
		imageSize: i18n && i18n.imageSize ? i18n.imageSize : __( 'Image Size' ),
	};

	const [ imageData, setImageData ] = useState( imageObj );

	useEffect( () => {
		if ( imageData ) {
			props.onChange( imageData );
		}
	}, [ imageData ] );

	const onUpdateImage = ( image ) => {
		const { id, sizes, alt } = image;

		setImageData( {
			id,
			alt,
			size: imageSize,
			url: sizes[ imageSize ].url,
		} );
	};

	const onRemoveImage = () => {
		setImageData( {
			id: undefined,
			alt: '',
			size: imageSize,
			url: '',
		} );
	};

	const onSizeChange = ( size ) => {
		let url = image.media_details?.sizes[ size ]?.source_url;
		if ( url ) {
			setImageData( { ...imageData, size, url } );
		}
	};

	return (
		<BaseControl label={ props.label } className="ib-block-control__image">
			<MediaUploadCheck>
				<MediaUpload
					title={ props.label }
					onSelect={ onUpdateImage }
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					value={ imageId }
					render={ ( { open } ) => (
						<Button
							className={
								! imageId
									? 'editor-post-featured-image__toggle'
									: 'editor-post-featured-image__preview'
							}
							onClick={ open }
						>
							{ ! imageId && labels.uploadImage }
							{ !! imageId && ! image && <Spinner /> }
							{ !! imageId && image && (
								<ResponsiveWrapper
									naturalWidth={ image.media_details.width }
									naturalHeight={ image.media_details.height }
								>
									<img
										src={ image.source_url }
										alt={ image.alt }
									/>
								</ResponsiveWrapper>
							) }
						</Button>
					) }
				/>
			</MediaUploadCheck>
			{ !! imageId && (
				<div className="ib-block-control__image-actions components-button-group">
					{ image && (
						<MediaUploadCheck>
							<MediaUpload
								title={ props.label }
								onSelect={ onUpdateImage }
								allowedTypes={ ALLOWED_MEDIA_TYPES }
								value={ imageId }
								render={ ( { open } ) => (
									<Button onClick={ open } icon="edit" />
								) }
							/>
						</MediaUploadCheck>
					) }
					<MediaUploadCheck>
						<Button
							onClick={ onRemoveImage }
							icon="trash"
							isDestructive
						/>
					</MediaUploadCheck>
				</div>
			) }
			{ !! imageId && image && (
				<SelectControl
					label={ labels.imageSize }
					className="ib-block-control__image-size"
					value={ imageSize }
					options={ [
						{ label: __( 'Full' ), value: 'full' },
						{ label: __( 'Large' ), value: 'large' },
						{ label: __( 'Medium' ), value: 'medium' },
						{ label: __( 'Thumbnail' ), value: 'thumbnail' },
					] }
					onChange={ onSizeChange }
				/>
			) }
		</BaseControl>
	);
};

export default compose(
	withSelect( ( select, props ) => {
		const { getMedia } = select( 'core' );
		const imageId = props.value.id;

		return {
			image: imageId ? getMedia( imageId ) : null,
		};
	} )
)( ImageControl );
