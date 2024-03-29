import type { StorybookConfig } from '@storybook/web-components-webpack5';

import { join, dirname } from 'path';
import remarkGfm from 'remark-gfm';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
	framework: {
		name: getAbsolutePath('@storybook/web-components-webpack5'),
		options: {},
	},
	stories: [
		'../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
		'../packages/*/dist/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'
		//'../packages/*/**/*.stories.@(js|jsx|ts|tsx|mdx)'
	],
	addons: [
		// Include the default storybook addons, i.e. actions, backgrounds, controls, docs, viewport, toolbars, measure, outline.
		// See: https://storybook.js.org/docs/react/essentials/introduction#configuration
		// getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('@storybook/addon-actions'),
		getAbsolutePath('@storybook/addon-viewport'),
		getAbsolutePath('@storybook/addon-controls'),
		getAbsolutePath('@storybook/addon-backgrounds'),
		getAbsolutePath('@storybook/addon-toolbars'),
		getAbsolutePath('@storybook/addon-measure'),
		getAbsolutePath('@storybook/addon-outline'),

		// Addon to report component accessbility warnings.
		// https://storybook.js.org/addons/@storybook/addon-a11y
		getAbsolutePath('@storybook/addon-a11y'),

		// Addon to visually execute play functions.
		// https://storybook.js.org/addons/@storybook/addon-interactions
		getAbsolutePath('@storybook/addon-interactions'),

		// Addon to show the story source code panel.
		// https://storybook.js.org/addons/@storybook/addon-storysource
		// XXX: there is a bug in this plugin that throws "SyntaxError: Cannot use import statement outside a module" during the build step.
		// getAbsolutePath('@storybook/addon-storysource'),

		// Addon to link from one story to another.
		// See: https://storybook.js.org/addons/@storybook/addon-links
		getAbsolutePath('@storybook/addon-links'),

		// Addon to allow github flavored markdown to be used in MDX pages.
		// See: https://storybook.js.org/docs/react/writing-docs/mdx#lack-of-github-flavored-markdown-gfm
		{
			name: '@storybook/addon-docs',
			options: {
				mdxPluginOptions: {
					mdxCompileOptions: {
						remarkPlugins: [remarkGfm],
					},
				},
			},
		},

		// Addon to toggle between themes.
		// https://storybook.js.org/addons/@etchteam/storybook-addon-css-variables-theme
		getAbsolutePath('@etchteam/storybook-addon-css-variables-theme'),

		// Addon to toggle user CSS user-preference, e.g. dark mode.
		// See: https://storybook.js.org/addons/storybook-addon-css-user-preferences
		// XXX: This plugin has not yet been updated to work with Storybook 7!
		// getAbsolutePath('storybook-addon-css-user-preferences'),
	],
	docs: {
		// Generate a docs page for stories that include the 'autodocs' tag.
		// https://storybook.js.org/docs/web-components/writing-docs/autodocs#setup-automated-documentation
		autodocs: true,
		defaultName: 'Docs'
	},
	staticDirs: [
		{ from: '../custom-elements.json', to: 'custom-elements.json' }
	],
	webpackFinal: async (config, { configType }) => {

		// To prevent double refresh due to tsc running in the background, exlude
		// all source directories from causing a refresh of storybook, i.e. only
		// reload if anything in the /dist directory changes
		config.watchOptions = {
			ignored: [
				'**/packages/*/components/*.ts',
				'**/packages/*/stories/*.ts',
				'**/packages/*/tests/*.ts',
				'**/node_modules'
			],
		}

		return config;
	},
};

export default config;
