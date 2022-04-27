import { html, css, CSSResultGroup, TemplateResult, } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import { ComponentBase } from './core/ComponentBase.js';

/**
 *
 */
@customElement('toolkit-router')
export class Router extends ComponentBase {

	/**
	 * @type {NavRoute[]}
	 */
	_routes = [];

	/**
	 * @type {boolean}
	 */
	@state() _activeRoute;


	// ------------
	// CONSTRUCTORS
	// ------------

	/**
	 * Initialise the component.
	 */
	constructor() {

		super();
	}

	// ------------------
	// LIFECYCLE HANDLERS
	// ------------------

	/**
	 * Setup the element when added to the DOM.
	 *
	 * @returns {void}
	 */
	connectedCallback() {

		// Initialise the component.
		super.connectedCallback();

		// Add window event listeners.
		window.addEventListener('popstate', this._scopedPopState = this._popState.bind(this));
	}

	/**
	 * Clean-up the element when removed from the DOM.
	 *
	 * @returns {void}
	 */
	disconnectedCallback() {

		// Remove window event listeners.
		window.addEventListener('popstate', this._scopedPopState);

		// Clean up the component.
		super.disconnectedCallback();
	}

	/**
	 * Configure the component after first render.
	 * 
	 * @returns {void}
	 */
	firstUpdated() {

		// Load the route for the current browser path.
		this.loadRoute(window.location.pathname, null, false);
	}

	// ----------------
	// PUBLIC FUNCTIONS
	// ----------------

	/**
	 * Registers a navigatable route.
	 * 
	 * @param {string} title - The default title for the route.
	 * @param {string} path - The path pattern for the route.
	 * @param {string} tagName - The web component tag to instatiate when navigating to the route.
	 * @param {Function} [beforeLoad] - Optional, function to call before the route is loaded.
	 * @param {Function} [afterLoad] - Optional, function to call after the route is loaded.
	 * 
	 * @returns {void}
	 */
	registerRoute(title, path, tagName, beforeLoad, afterLoad) {

		this._routes.push({
			path: path,
			title: title,
			tagName: tagName,
			beforeLoad: beforeLoad,
			afterLoad: afterLoad
		});
	}

	/**
	 * Navigate to a registered route.
	 * 
	 * @param {string} path - The path of the route to navigate to.
	 * @param {string} [title] - Optional, browser title to set for the route.
	 * @param {boolean} [persist] - Optional, set to persist the route navigation in the browser history.
	 * 
	 * @returns {void}
	 */
	async loadRoute(path, title = null, persist = true) {

		// Find the route matching the given path.
		const match = this._matchPath(path);

		if (match) {

			// Execute the route before load handler.
			if (match.route.beforeLoad) {
				await match.route.beforeLoad();
			}

			// Set the browser title to match the route config.
			document.title = title || match.route.title;

			// Push the route to the browser history state.
			if (persist) {

				window.history.pushState(
					{
						path: path,
						title: document.title,
						params: match.params,
						query: this._extractQueryParams()
					},
					document.title,
					window.location.origin + path
				);

			} else {

				window.history.replaceState(
					{
						path: path,
						title: document.title,
						params: match.params,
						query: this._extractQueryParams()
					},
					document.title,
					window.location.origin + path
				);
			}

			// Set the route to active.
			this._activeRoute = match.route;

			// Execute the route after load handler.
			if (match.route.afterLoad) {
				await match.route.afterLoad();
			}
		}
	}

	// --------------
	// EVENT HANDLERS
	// --------------

	/**
	 * Handle window history back and forwards navigation.
	 * 
	 * @param {PopStateEvent} event - The event details.
	 * 
	 * @returns {void}
	 */
	async _popState(event) {

		this.loadRoute(window.location.pathname, event.state?.title, false);
	}

	// -----------------
	// COMPONENT ACTIONS
	// -----------------

	/**
	 * Attempts to find a route that matches a given path, taking path variables into account.
	 * 
	 * e.g. given a registered path of "/accounts/:id/details/:mode", passing "/accounts/5/details/active" will return a match result of:
	 * {
	 *   route: NavRoute,
	 *   params: {
	 *     id: '5',
	 *     mode: 'active'
	 *   }
	 * }
	 * 
	 * @param {string} path - The path to find in the list of registered routes.
	 * 
	 * @returns {Object} The matched route details, or null if no route could be matched.
	 */
	_matchPath(path) {

		// Iterate over the route path patterns until a path match is found.
		for (const route of this._routes) {

			// Get the individual parts of the route path pattern and the path.
			const patternParts = route.path.split('/');
			const pathParts = path.split('/');

			if (patternParts.length === pathParts.length) {

				// Check that each part of the pattern matches each part of the path.
				let matches = true;
				let params = {};

				for (let i = 0; i < patternParts.length; i++) {

					const patternPart = patternParts[i];
					const pathPart = pathParts[i];

					if (patternPart.startsWith(':')) {

						// Wildcard detected, don't check the path part, just cache it's value for later.
						params[patternPart.replace(':', '')] = pathPart;

					} else if (patternPart !== pathPart) {

						// Not a wildcard and values don't match, stop checking this route further.
						matches = false;
						break;
					}
				}

				// Return the current route and it's paramaters if a match is found.
				if (matches) {

					return {
						route: route,
						params: params
					};
				}
			}
		}

		return null;
	}

	/**
	 * Extracts the query paramaters from the page URL.
	 * 
	 * Values are returned as a key value pair map. If duplicate keys are found, then the values are group under the key name in an array.
	 * 
	 * @returns {Object} The query paramaters group by key names.
	 */
	_extractQueryParams() {

		const result = {};

		const urlSearchParams = new URLSearchParams(window.location.search);

		urlSearchParams.forEach((value, key) => {

			if (!result[key]) {

				// This is the first time we encounter the key, just add it to the result as a string value.
				result[key] = value;

			} else {

				// This is the second time we encounter the key, upsert the key type to an array by either converting it to an array, or just adding the value in case it's already an array.
				if (Array.isArray(result[key])) {
					result[key].push(value);
				} else {
					result[key] = [result[key], value];
				}
			}
		});

		return result;
	}

	// -------------------
	// RENDERING TEMPLATES
	// -------------------

	/**
	 * The element style template.
	 * 
	 * @type {CSSResultGroup}
	 */
	static get styles() {

		return css`
			:host {
				box-sizing: border-box;

				width: 100%;
				height: 100%;
			}
		`;
	}

	/**
	 * Apply changes to the element DOM when a property value changes.
	 * 
	 * @returns {TemplateResult} The updated DOM template.
	 */
	render() {

		return html`${this._activeRoute ? unsafeHTML(`<${this._activeRoute.tagName}></${this._activeRoute.tagName}>`) : ''}`;
	}
}