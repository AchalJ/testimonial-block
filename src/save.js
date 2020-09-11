import { RichText } from '@wordpress/block-editor';
import Styles from './style';

const save = ( { attributes, className } ) => {
	const {
		blockId,
		content,
		imageData,
		name,
		title,
		imagePosition,
	} = attributes;

	const getMeta = () => {
		return (
			<div className={ `ib-testimonial--meta image-${ imagePosition }` }>
				{ imageData && imageData.id && (
					<div className="ib-testimonial--image">
						<img src={ imageData.url } alt={ imageData.alt } />
					</div>
				) }
				<div className="ib-testimonial--details">
					<div className="ib-testimonial--name">
						{ ! RichText.isEmpty( name ) && (
							<RichText.Content tagName="span" value={ name } />
						) }
					</div>
					<div className="ib-testimonial--title">
						{ ! RichText.isEmpty( title ) && (
							<RichText.Content tagName="span" value={ title } />
						) }
					</div>
				</div>
			</div>
		);
	};

	return (
		<div>
			<Styles { ...{ attributes } } />
			<div id={ `ib-testimonial-${ blockId }` } className={ className }>
				<div className="ib-testimonial-block">
					<div className="ib-testimonial--content">
						{ ! RichText.isEmpty( content ) && (
							<RichText.Content tagName="p" value={ content } />
						) }
					</div>
					{ getMeta() }
				</div>
			</div>
		</div>
	);
};
export default save;
