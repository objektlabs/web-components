import type { StorybookConfig } from "@storybook/web-components-vite";

import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
	framework: {
		name: getAbsolutePath("@storybook/web-components-vite"),
		options: {},
	},
	stories: [
		"../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
		'../packages/*/dist/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'
		//'../packages/*/**/*.stories.@(js|jsx|ts|tsx|mdx)'
	],
	addons: [
		// Include the default storybook addons, i.e. actions, backgrounds, controls, docs, viewport, toolbars, measure, outline.
		// See: https://storybook.js.org/docs/web-components/essentials/introduction
		getAbsolutePath("@storybook/addon-essentials"),

		// Addon to report component accessbility warnings.
		// https://storybook.js.org/addons/@storybook/addon-a11y
		getAbsolutePath('@storybook/addon-a11y'),

		// Addon to visually execute play functions.
		// https://storybook.js.org/addons/@storybook/addon-interactions
		getAbsolutePath("@storybook/addon-interactions"),

		// Addon to show the story source code panel.
		// https://storybook.js.org/addons/@storybook/addon-storysource
		// getAbsolutePath("@storybook/addon-storysource"),

		// Addon to link from one story to another.
		// See: https://storybook.js.org/addons/@storybook/addon-links
		getAbsolutePath("@storybook/addon-links"),

		// getAbsolutePath("@etchteam/storybook-addon-css-variables-theme"),
		// {
		// 	name: '@storybook/addon-docs',
		// 	options: {
		// 		sourceLoaderOptions: {
		// 			injectStoryParameters: false,
		// 		},
		// 	},
		// },

		/*
		'@etchteam/storybook-addon-css-variables-theme',
		'storybook-addon-css-user-preferences'
		*/

		// Addon to toggle between themes.
		// https://storybook.js.org/addons/@etchteam/storybook-addon-css-variables-theme
		getAbsolutePath("@etchteam/storybook-addon-css-variables-theme"),

		// Addon to toggle user CSS user-preference, e.g. dark mode.
		// See: https://storybook.js.org/addons/storybook-addon-css-user-preferences
		// XXX: This plugin has not yet been updated to work with Storybook 7!
		// getAbsolutePath("storybook-addon-css-user-preferences"),
	],
	docs: {
		// Generate a docs page for stories that include the 'autodocs' tag.
		// https://storybook.js.org/docs/web-components/writing-docs/autodocs#setup-automated-documentation
		autodocs: "tag",
		defaultName: 'Docs'
	},
	staticDirs: [
		{ from: '../custom-elements.json', to: 'custom-elements.json' }
	],
};

export default config;
