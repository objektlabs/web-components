import { css, CSSResultGroup, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * An element base class for clickable components.
 * 
 * @property {boolean} hidden - Indictor if the component is currently hidden.
 * @property {boolean} disabled - Indictor if the component is currently disabled.
 */
export class ComponentBase extends LitElement {

	/**
	 * @type {boolean} - Indictor if the component is currently hidden.
	 */
	@property({ type: Boolean, reflect: true }) hidden;

	/**
	 * @type {boolean} - Indictor if the component is currently disabled.
	 */
	@property({ type: Boolean, reflect: true }) disabled = null;

	// ------------
	// CONSTRUCTORS
	// ------------

	// n/a

	// ------------------
	// LIFECYCLE HANDLERS
	// ------------------

	// n/a

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
	 * @type {CSSResultGroup}
	 */
	static get styles() {

		return css`
			:host {
				box-sizing: border-box;

				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: stretch;

				flex-shrink: 0;
			}

			:host([disabled]) {
				cursor: auto;
				pointer-events: none;
			}
		`;
	}
}