/* global importScripts workbox */

// Import the workbox caching library.
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

// Import workbox tools.
const { CacheableResponsePlugin } = workbox.cacheableResponse;
const { StaleWhileRevalidate, CacheFirst, NetworkFirst } = workbox.strategies;
const { ExpirationPlugin } = workbox.expiration;
const { registerRoute } = workbox.routing;

const { precacheAndRoute } = workbox.precaching;

precacheAndRoute(self.__WB_MANIFEST, {
	ignoreURLParametersMatching: [/.*/] // Ignore all URL parameters.
});

// Cache page navigations (html) with a Network First strategy.
console.log('Caching Pages...');

registerRoute(
	({request}) => request.mode === 'navigate',
	new NetworkFirst({
		cacheName: 'pages',
		plugins: [
			// Ensure that only requests that result in a 200 status are cached
			new CacheableResponsePlugin({
				statuses: [200],
			})
		],
		networkTimeoutSeconds: 3
	})
);

// Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy.
console.log('Caching Scripts...');

registerRoute(
	({ request }) => request.destination === 'style' || request.destination === 'script' || request.destination === 'worker',
	new StaleWhileRevalidate({
		cacheName: 'scripts',
		plugins: [
			// Ensure that only requests that result in a 200 status are cached.
			new CacheableResponsePlugin({
				statuses: [0, 200],
			}),
		],
	}),
);

// Cache assets with a Cache First strategy.
console.log('Caching Assets...');

registerRoute(
	({ request }) => request.destination === 'image',
	new CacheFirst({
		cacheName: 'assets',
		plugins: [
			// Ensure that only requests that result in a 200 status are cached.
			new CacheableResponsePlugin({
				statuses: [0, 200],
			}),
			// Don't cache more than 100 items, and expire them after 30 days.
			new ExpirationPlugin({
				maxEntries: 100,
				maxAgeSeconds: 60 * 60 * 24 * 30
			}),
		],
	}),
);

// Cache fonts with a Stale While Revalidate strategy.
console.log('Caching Fonts...');

registerRoute(
	({ url }) => url.origin === 'https://fonts.gstatic.com',
	new CacheFirst({
		cacheName: 'fonts',
		plugins: [
			// Ensure that only requests that result in a 200 status are cached.
			new CacheableResponsePlugin({
				statuses: [0, 200],
			}),
			// Don't cache more than 30 items, and expire them after 365 days.
			new ExpirationPlugin({
				maxEntries: 30,
				maxAgeSeconds: 60 * 60 * 24 * 365
			}),
		],
	}),
);