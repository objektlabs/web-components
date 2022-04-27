import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../custom-elements.json';

import basicTheme from '!!style-loader?injectType=lazyStyleTag!css-loader!../themes/default-theme.css'
import purpleTheme from '!!style-loader?injectType=lazyStyleTag!css-loader!../themes/purple-theme.css'

import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';

// Auto generate properties in the docs view from the custom elements manifest.
setCustomElementsManifest(customElements);

// Activate the theme switcher addon.
export const decorators = [
	cssVariablesTheme
];

// Configure global settings for all stories.
export const parameters = {
	controls: {
		expanded: true,
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
			boolean: /.*/,
		},
		exclude: /(^_.*|^#.*|^\-\-.*)$/ // hide private properties
	},
	backgrounds: {
		default: 'light',
		values: [
			{ name: 'white', value: '#ffffff' },
			{ name: 'light', value: '#f0f0f0' },
			{ name: 'dark', value: '#202124' },
		],
	},
	cssVariables: {
		files: {
			'default': basicTheme,
			'Purple Theme': purpleTheme,
		}
	},
	options: {
		storySort: {
			order: ['Getting Started', 'Learn the Basics', 'Contribute', 'Inputs', 'Buttons'],
		},
	},
}