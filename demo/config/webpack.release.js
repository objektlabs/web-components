import { merge } from 'webpack-merge';

import common from './webpack.common.js';

import WorkboxWebpackPlugin from 'workbox-webpack-plugin';

export default merge(common, {
	mode: 'production',
	devtool: false,
	plugins: [
		// Inject all non-asset files into the service-worker preload cache.
		new WorkboxWebpackPlugin.InjectManifest({
			swSrc: './service-worker.js',
			exclude: [/assets.*/]
		})
	],
	performance: {
		hints: 'warning'
	},
	optimization: {
		minimize: true
	},
	stats: {
		preset: 'normal'
	}
});