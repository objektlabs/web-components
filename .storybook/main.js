module.exports = {
	framework: '@storybook/web-components',
	stories: [
		'../packages/*/dist/stories/**/*.stories.mdx',
		'../packages/*/dist/stories/**/*.stories.@(js|jsx|ts|tsx)'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@etchteam/storybook-addon-css-variables-theme'
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