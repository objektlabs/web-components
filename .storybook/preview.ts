import type { Preview } from "@storybook/web-components";

import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../custom-elements.json';

import blueTheme from '!!style-loader?injectType=lazyStyleTag!css-loader!../themes/blue-theme.css'
import greenTheme from '!!style-loader?injectType=lazyStyleTag!css-loader!../themes/green-theme.css'
import purpleTheme from '!!style-loader?injectType=lazyStyleTag!css-loader!../themes/purple-theme.css'

import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';

// Auto generate properties in the docs view from the custom elements manifest.
setCustomElementsManifest(customElements);

// Activate the theme switcher addon.
export const decorators = [
	cssVariablesTheme
];

// Configure global settings for all stories.
const preview: Preview = {
	parameters: {
		actions: {
			// Automatically report actions to the actions panel from events starting with 'on' e.g. 'onClick.
			// See: https://storybook.js.org/docs/web-components/essentials/actions#automatically-matching-args
			// TODO: investigate why this is not working
			argTypesRegex: '^on.*'
		},
		controls: {
			// Show documentation columns in controls, e.g. Description, Default, etc.
			// See: https://storybook.js.org/docs/web-components/essentials/controls#show-full-documentation-for-each-property
			expanded: true,

			// Set default control types to render based on property name.
			// See: https://storybook.js.org/docs/web-components/essentials/controls#show-full-documentation-for-each-property
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			},
		},
		backgrounds: {
			// Set default background color & list of available preview background colors.
			// See: https://storybook.js.org/docs/web-components/essentials/backgrounds
			default: 'light',
			values: [
				{ name: 'white', value: '#ffffff' },
				{ name: 'light', value: '#f0f0f0' },
				{ name: 'dark', value: '#202124' },
			],
		},
		options: {
			// Apply custom UI sort order.
			// See: https://storybook.js.org/docs/web-components/writing-stories/naming-components-and-hierarchy#sorting-stories
			storySort: {
				method: 'configure',
				includeNames: true,
				order: [
					'Getting Started',
					'Contribute',
					'Components',
					[
						'Button', ['Primary', 'Secondary', 'Clear', '*'],
						'Text-Field', ['Stack', 'Inline', 'Outline', 'Filled', 'Clear', '*']
					]
				],
			},
		},
		docs: {
			// Include a table of contents on the docs page.
			// See: https://storybook.js.org/docs/web-components/writing-docs/autodocs#generate-a-table-of-contents
			// XXX: removing this as the Storybook UI overflows with this enabled as the code preview does not wrap long code blocks correctly.
			// toc: {
			// 	disable: true,
			// 	title: 'Contents',
			// }

			// Set the preview theme to match the Storybook UI.
			// See: https://storybook.js.org/docs/web-components/configure/theming#theming-docs
			// theme: objektDarkThemethemes.dark
		},
		cssVariables: {
			files: {
				'Blue Theme': blueTheme,
				'Green Theme': greenTheme,
				'Purple Theme': purpleTheme,
			}
		}
	},
};

export default preview;
