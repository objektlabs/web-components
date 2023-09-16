import { create } from '@storybook/theming/create';

export default create({
	base: 'dark',

	// Brand
	brandTitle: '<small style="font-weight: normal">Objekt Labs</small> <br> Web Components',
	brandUrl: 'https://github.com/objektlabs/web-components',
	//brandImage: 'https://place-hold.it/350x150',
	//brandTarget: '_self',

	// // Color
	colorPrimary: 'red',
	colorSecondary: '#029CFD',

	// UI
	appBg: '#1e2128',
	appContentBg: '#1e2128',
	appBorderColor: '#ffffff1a',
	appBorderRadius: 10,

	// Typography
	// fontBase: '"Open Sans", sans-serif',
	// fontCode: 'monospace',

	// Text colors
	// textColor: 'black',
	// textInverseColor: 'rgba(255,255,255,0.9)',

	// Toolbar default and active colors
	barTextColor: '#798186',
	//barSelectedColor: 'red',
	barBg: '#1e2128',

	// Form colors
	// inputBg: 'white',
	// inputBorder: 'silver',
	// inputTextColor: 'black',
	// inputBorderRadius: 4,
});