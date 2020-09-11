const attributes = {
	blockId: {
		type: 'string',
		default: undefined,
	},

	content: {
		type: 'string',
		default:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
	},
	contentFontSizeDesktop: {
		type: 'number',
		default: '',
	},
	contentFontSizeTablet: {
		type: 'number',
		default: '',
	},
	contentFontSizeMobile: {
		type: 'number',
		default: '',
	},
	imageData: {
		type: 'object',
		default: {
			id: undefined,
			alt: '',
			size: undefined,
			url: '',
		},
	},
	imageSize: {
		type: 'number',
		default: 50,
	},
	imageBorderRadius: {
		type: 'number',
		default: 50,
	},
	name: {
		type: 'string',
		default: 'John Doe',
	},
	nameFontSizeDesktop: {
		type: 'number',
		default: '',
	},
	nameFontSizeTablet: {
		type: 'number',
		default: '',
	},
	nameFontSizeMobile: {
		type: 'number',
		default: '',
	},
	title: {
		type: 'string',
		default: 'Web Developer',
	},
	titleFontSize: {
		type: 'number',
		default: '',
	},
	titleFontSizeTablet: {
		type: 'number',
		default: '',
	},
	titleFontSizeMobile: {
		type: 'number',
		default: '',
	},
	imagePosition: {
		type: 'string',
		default: 'left',
	},
	textAlign: {
		type: 'string',
		default: 'center',
	},
};
export default attributes;
