import {
	RichText,
	AlignmentToolbar,
	BlockControls,
} from '@wordpress/block-editor';

import { ResizableBox } from '@wordpress/components';

import { __ } from '@wordpress/i18n';

import Inspector from './inspector';
import Styles from './style';

const edit = ( props ) => {
	const { attributes, setAttributes } = props;
	const {
		content,
		contentColor,
		imageData,
		name,
		nameColor,
		title,
		titleColor,
		imagePosition,
		imageSize,
		textAlign,
	} = attributes;

	if ( ! imageSize || isNaN( imageSize ) ) {
		imageSize = 50;
	}

	if ( props.isSelected && ! props.blockId ) {
		const clientId = props.clientId;
		setAttributes( { blockId: clientId.replace( /-/g, '' ) } );
	}

	const getMeta = () => {
		return (
			<div className={ `ib-testimonial--meta image-${ imagePosition }` }>
				{ imageData && imageData.id && (
					<div className="ib-testimonial--image">
						<ResizableBox
							className="ib-testimonial--image-box"
							size={ { imageSize } }
							minWidth={ 50 }
							maxWidth={ 250 }
							enable={ {
								top: true,
								right: true,
								bottom: true,
								left: true,
							} }
							lockAspectRatio
							onResizeStop={ (
								_event,
								_direction,
								_elt,
								delta
							) => {
								setAttributes( {
									imageSize: parseInt(
										imageSize + delta.width,
										10
									),
								} );
							} }
							showHandle={ props.isSelected }
						>
							<img src={ imageData.url } alt={ imageData.alt } />
						</ResizableBox>
					</div>
				) }
				<div className="ib-testimonial--details">
					<RichText
						identifier="name"
						tagName="div"
						className="ib-testimonial--name"
						value={ name }
						onChange={ ( value ) =>
							setAttributes( { name: value } )
						}
						placeholder={ __( 'Name', 'ib-testimonial' ) }
						style={ { color: nameColor } }
						allowedFormats={ [
							'core/bold',
							'core/italic',
							'core/link',
							'core/text-color',
						] }
						disableLineBreaks
						keepPlaceholderOnFocus={ true }
					/>
					<RichText
						tagName="div"
						className="ib-testimonial--title"
						value={ title }
						onChange={ ( title ) => setAttributes( { title } ) }
						placeholder={ __( 'Title', 'ib-testimonial' ) }
						style={ { color: titleColor } }
						allowedFormats={ [
							'core/bold',
							'core/italic',
							'core/link',
							'core/text-color',
						] }
						disableLineBreaks
						keepPlaceholderOnFocus={ true }
					/>
				</div>
			</div>
		);
	};

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ textAlign }
					onChange={ ( newAlign ) =>
						setAttributes( { textAlign: newAlign } )
					}
				/>
			</BlockControls>
			<Inspector { ...{ attributes, setAttributes } } />
			<Styles { ...{ attributes } } />
			<div
				id={ `ib-testimonial-${ attributes.blockId }` }
				className={ props.className }
			>
				<div className="ib-testimonial-block">
					<RichText
						tagName="div"
						className="ib-testimonial--content"
						value={ content }
						onChange={ ( content ) => setAttributes( { content } ) }
						placeholder={ __(
							'Add testimonial content...',
							'ib-testimonial'
						) }
						allowedFormats={ [
							'core/bold',
							'core/italic',
							'core/text-color',
						] }
						style={ { color: contentColor } }
						keepPlaceholderOnFocus={ true }
					/>
					{ getMeta() }
				</div>
			</div>
		</>
	);
};

export default edit;
