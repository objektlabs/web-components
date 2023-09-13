import { dirname, join } from "path";

module.exports = {
	framework: getAbsolutePath("@storybook/web-components"),

	stories: [
		"../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
		'../packages/*/dist/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'
	],

	addons: [
		getAbsolutePath("@etchteam/storybook-addon-css-variables-theme"),
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@storybook/addon-a11y"),
		getAbsolutePath("@storybook/addon-interactions"),
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@storybook/addon-storysource"),
		{
			name: '@storybook/addon-docs',
			options: {
				sourceLoaderOptions: {
					injectStoryParameters: false,
				},
			},
		},
	],

	features: {
		postcss: false,
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

	docs: {
		autodocs: true
	}
};

function getAbsolutePath(value) {
	return dirname(require.resolve(join(value, "package.json")));
}