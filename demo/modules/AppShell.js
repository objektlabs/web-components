
import { html, css, CSSResultGroup, TemplateResult } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';

import { ComponentBase } from './framework/core/ComponentBase.js';

import { Router } from './framework/Router.js';

import './framework/components/Loader.js';
import './framework/components/Shade.js';

/**
 * Demo app shell.
 */
@customElement('app-shell')
export class AppShell extends ComponentBase {

	/**
	 * @type {boolean}
	 */
	@state() _loading;

	/**
	 * @type {Router}
	 */
	@query('#router') _router;

	// ------------
	// CONSTRUCTORS
	// ------------

	/**
	 * Initialise the component.
	 */
	constructor() {

		super();

		// Set default property values.
		this._loading = false;
	}

	// ------------------
	// LIFECYCLE HANDLERS
	// ------------------

	/**
	 * Setup the element when added to the DOM.
	 * 
	 * @returns {void}
	 */
	async connectedCallback() {

		super.connectedCallback();
	}

	/**
	 * Clean-up the element when removed from the DOM.
	 * 
	 * @returns {void}
	 */
	disconnectedCallback() {

		super.disconnectedCallback();
	}

	/**
	 * Configure the component after first render.
	 *
	 * @returns {void}
	 */
	firstUpdated() {

		// Register app navigation routes.
		this._router.registerRoute('Demo', '/', 'app-view-home', () => import('./views/ViewHome.js'));
	}

	// ----------------
	// HELPER FUNCTIONS
	// ----------------

	// n/a

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

				display: block;

				width: 100vw;
				height: 100vh;

				padding-top: env(safe-area-inset-top);
				padding-bottom: env(safe-area-inset-bottom);
				padding-left: env(safe-area-inset-left);
				padding-right: env(safe-area-inset-right);
			}
		`;
	}

	/**
	 * Apply changes to the element DOM when a property value changes.
	 * 
	 * @returns {TemplateResult} The updated DOM template.
	 */
	render() {

		return html`
			<toolkit-router id="router"></toolkit-router>

			${this._loading ? html`
				<toolkit-shade>
					<toolkit-loader></toolkit-loader>
				</toolkit-shade>
			`: html``}
		`;
	}
}