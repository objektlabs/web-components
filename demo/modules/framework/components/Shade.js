import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { ComponentBase } from '../core/ComponentBase.js';

/**
 * Full screen shaded overlay.
 * 
 * @element toolkit-shade
 * 
 * @cssprop --toolkit-shade-background
 * 
 * @example
 * ```html
 *   <toolkit-shade></toolkit-shade>
 * ```
 */
@customElement('toolkit-shade')
export class Shade extends ComponentBase {

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

				:host {
					position: fixed;
					top: 0px;
					bottom: 0px;
					left: 0px;
					right: 0px;

					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					background: var(--toolkit-shade-background, rgba(0, 0, 0, 0.5));
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
			<slot></slot>
		`;
	}
}