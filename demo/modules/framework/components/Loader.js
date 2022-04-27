import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { ComponentBase } from '../core/ComponentBase.js';

/**
 * A simple infinite loading indicator.
 * 
 * @element toolkit-loader
 * 
 * @cssprop --toolkit-loader-color
 * 
 * @example
 * ```html
 *   <toolkit-loader></toolkit-loader>
 * ```
 */
@customElement('toolkit-loader')
export class Loader extends ComponentBase {

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

	// ----------------
	// PUBLIC FUNCTIONS
	// ----------------

	// n/a

	// --------------
	// EVENT HANDLERS
	// --------------

	// n/a

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
	 * @type {HTMLTemplateElement}
	 */
	static get styles() {

		return [
			super.styles,
			css`
				/* HOST */

				.container {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				.lds-ring {
					display: inline-block;
					position: relative;
					width: 80px;
					height: 80px;
				}

				.lds-ring div {
					box-sizing: border-box;
					display: block;
					position: absolute;
					width: 64px;
					height: 64px;
					margin: 8px;
					border: 8px solid var(--toolkit-loader-color, #FFFFFF);
					border-radius: 50%;
					animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
					border-color: var(--toolkit-loader-color, #FFFFFF) transparent transparent transparent;
				}

				.lds-ring div:nth-child(1) {
					animation-delay: -0.45s;
				}

				.lds-ring div:nth-child(2) {
					animation-delay: -0.3s;
				}

				.lds-ring div:nth-child(3) {
					animation-delay: -0.15s;
				}

				@keyframes lds-ring {
					0% {
						transform: rotate(0deg);
					}

					100% {
						transform: rotate(360deg);
					}
				}
			`
		];
	}

	/**
	 * Apply changes to the element DOM when a property value changes.
	 * 
	 * @returns {HTMLTemplateElement} The updated DOM template.
	 */
	render() {

		return html`
			<div class="container">
				<div class="lds-ring">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		`;
	}
}