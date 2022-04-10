import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../custom-elements.json';

import basicTheme from '!!style-loader?injectType=lazyStyleTag!css-loader!../themes/default-theme.css'
import purpleTheme from '!!style-loader?injectType=lazyStyleTag!css-loader!../themes/purple-theme.css'

import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';

// Auto generate properties in the docs view from the custom elements manifest.
setCustomElementsManifest(customElements);

// Activate the theme switcher addon.
export const decorators = [
	cssVariablesTheme,
];

// Configure global settings for all stories.
export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	backgrounds: {
		values: [
			{ name: 'light', value: '#ffffff' },
			{ name: 'dark', value: '#202124' },
		],
	},
	cssVariables: {
		files: {
			'default': basicTheme,
			'Purple Theme': purpleTheme,
		}
	}
}