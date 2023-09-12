module.exports = {
	framework: '@storybook/web-components',
	stories: [
		"../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
		'../packages/*/dist/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'
	],
	addons: [
		'@etchteam/storybook-addon-css-variables-theme',
		'storybook-addon-css-user-preferences',
		'@storybook/addon-essentials',
		'@storybook/addon-a11y',
		'@storybook/addon-interactions',
		'@storybook/addon-links',
		'@storybook/addon-storysource',
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
	}
};