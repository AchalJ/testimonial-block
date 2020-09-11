import { renderStyle } from './components/utils';

const Styles = ( props ) => {
	const attributes = props.attributes;
	const {
		blockId,
		contentFontSizeDesktop,
		contentFontSizeTablet,
		contentFontSizeMobile,
		imageSize,
		imageBorderRadius,
		imagePosition,
		nameFontSizeDesktop,
		nameFontSizeTablet,
		nameFontSizeMobile,
		titleFontSize,
		titleFontSizeTablet,
		titleFontSizeMobile,
		textAlign,
	} = attributes;

	const selectorPrefix = `#ib-testimonial-${ blockId }`;

	let rules = {
		desktop: {
			'.ib-testimonial-block': {
				'text-align': textAlign,
			},
			'.ib-testimonial--image img': {
				width: imageSize ? imageSize + 'px' : undefined,
				'border-radius':
					undefined !== imageBorderRadius
						? imageBorderRadius + 'px'
						: imageBorderRadius,
			},
			'.ib-testimonial--name': {
				'font-size': nameFontSizeDesktop
					? nameFontSizeDesktop + 'px'
					: undefined,
			},
			'.ib-testimonial--title': {
				'font-size': titleFontSize ? titleFontSize + 'px' : undefined,
			},
			'.ib-testimonial--content': {
				'font-size': contentFontSizeDesktop
					? contentFontSizeDesktop + 'px'
					: undefined,
			},
			'.ib-testimonial--details': {
				'text-align': textAlign,
			},
			'.ib-testimonial--meta': {
				'justify-content':
					'left' === textAlign
						? 'flex-start'
						: 'right' === textAlign
						? 'flex-end'
						: textAlign,
				'align-items':
					'top' === imagePosition && 'left' === textAlign
						? 'flex-start'
						: 'top' === imagePosition && 'right' === textAlign
						? 'flex-end'
						: undefined,
			},
		},
		tablet: {
			'.ib-testimonial--name': {
				'font-size': nameFontSizeTablet
					? nameFontSizeTablet + 'px'
					: undefined,
			},
			'.ib-testimonial--title': {
				'font-size': titleFontSizeTablet
					? titleFontSizeTablet + 'px'
					: undefined,
			},
			'.ib-testimonial--content': {
				'font-size': contentFontSizeTablet
					? contentFontSizeTablet + 'px'
					: undefined,
			},
		},
		mobile: {
			'.ib-testimonial--name': {
				'font-size': nameFontSizeMobile
					? nameFontSizeMobile + 'px'
					: undefined,
			},
			'.ib-testimonial--title': {
				'font-size': titleFontSizeMobile
					? titleFontSizeMobile + 'px'
					: undefined,
			},
			'.ib-testimonial--content': {
				'font-size': contentFontSizeMobile
					? contentFontSizeMobile + 'px'
					: undefined,
			},
		},
	};

	if ( 'right' === textAlign && 'right' === imagePosition ) {
		rules.desktop[ '.ib-testimonial--meta' ] = {
			'justify-content': 'flex-start',
		};
	}
	if ( 'left' === textAlign && 'right' === imagePosition ) {
		rules.desktop[ '.ib-testimonial--meta' ] = {
			'justify-content': 'flex-end',
		};
	}

	return renderStyle( rules, selectorPrefix );
};

export default Styles;
