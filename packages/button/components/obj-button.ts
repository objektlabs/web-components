import { html, css, LitElement, CSSResultGroup, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A clickable button component.
 * 
 * ## Installation
 * ```sh
 * npm install @objekt/web-components/button
 * ```
 * 
 * @example
 *
 * ```html
 * Primary:
 * 
 * <obj-button label="Primary" type="primary"></obj-button>
 * <obj-button label="Disabled" type="primary" disabled></obj-button>
 * <obj-button label="Invert" type="primary" invert></obj-button>
 * 
 * Secondary:
 * 
 * <obj-button label="Secondary" type="secondary"></obj-button>
 * <obj-button label="Disabled" type="secondary" disabled></obj-button>
 * <obj-button label="Invert" type="secondary" invert></obj-button>
 * ```
 * 
 * @element obj-button
 * 
 * @property {string} [type='secondary'] - The button display type. e.g. primary, secondary.
 * @property {string} [label=''] - The button display label.
 * @property {boolean} [invert] - Set to invert the component colors for rendering on dark backgrounds.
 * 
 * @fires click - Dispatched when the button is clicked.
 * 
 * @csspart button - The button container.
 * 
 * @cssprop --obj-button-border-radius - Hello World
 * @cssprop --obj-button-padding
 * @cssprop --obj-button-text-align
 * 
 * @cssprop --obj-button-primary-background
 * @cssprop --obj-button-primary-border
 * @cssprop --obj-button-primary-font-color
 * @cssprop --obj-button-primary-font-family
 * @cssprop --obj-button-primary-font-size
 * @cssprop --obj-button-primary-font-weight
 *
 * @cssprop --obj-button-primary-disabled-background
 * @cssprop --obj-button-primary-disabled-border
 * @cssprop --obj-button-primary-disabled-font-color
 *
 * @cssprop --obj-button-primary-invert-background
 * @cssprop --obj-button-primary-invert-border
 * @cssprop --obj-button-primary-invert-font-color
 * 
 * @cssprop --obj-button-secondary-background
 * @cssprop --obj-button-secondary-border
 * @cssprop --obj-button-secondary-font-color
 * @cssprop --obj-button-secondary-font-family
 * @cssprop --obj-button-secondary-font-size
 * @cssprop --obj-button-secondary-font-weight
 *
 * @cssprop --obj-button-secondary-disabled-background
 * @cssprop --obj-button-secondary-disabled-border
 * @cssprop --obj-button-secondary-disabled-font-color
 * 
 * @cssprop --obj-button-secondary-invert-background
 * @cssprop --obj-button-secondary-invert-border
 * @cssprop --obj-button-secondary-invert-font-color
 */
@customElement('obj-button')
export class Button extends LitElement {

	@property({ type: String, reflect: true }) public type = 'secondary';
	@property({ type: String, reflect: true }) public label = '';
	@property({ type: Boolean, reflect: true }) public invert = false;
	@property({ type: Boolean, reflect: true }) public disabled = false;

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

	// n/a

	// ----------------
	// PUBLIC FUNCTIONS
	// ----------------

	// n/a

	// --------------
	// EVENT HANDLERS
	// --------------

	#handleClick(e: MouseEvent) {

		e.preventDefault();
		e.stopPropagation();

		this.dispatchEvent(new Event('click', {
			bubbles: true,
			composed: true,
		}));
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
	 */
	static override get styles() {

		return [
			css`
				/* HOST */

				:host {
					display: inline-flex;
				}

				.container {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;

					width: 100%;

					border-radius: var(--obj-button-border-radius, 0px);
					padding: var(--obj-button-padding, 10px);
					text-align: var(--obj-button-text-align, center);
				}

				/* TYPE - PRIMARY */

				:host([type="primary"]) > .container {
					background: var(--obj-button-primary-background, grey);
					border: var(--obj-button-primary-border, 1px solid grey);

					color: var(--obj-button-primary-font-color, white);
					font-family: var(--obj-button-primary-font-family, Arial);
					font-size: var(--obj-button-primary-font-size, 12px);
					font-weight: var(--obj-button-primary-font-weight, normal);
				}

				/* TYPE - SECONDARY */

				:host > .container,
				:host([type="secondary"]) > .container {
					background: var(--obj-button-secondary-background, transparent);
					border: var(--obj-button-secondary-border, 1px solid grey);

					color: var(--obj-button-secondary-font-color, grey);
					font-family: var(--obj-button-secondary-font-family, Arial);
					font-size: var(--obj-button-secondary-font-size, 12px);
					font-weight: var(--obj-button-secondary-font-weight, normal);
				}

				/* DISABLED */

				:host([disabled]) > .container,
				:host([disabled][type="secondary"]) > .container {
					background: var(--obj-button-secondary-disabled-background, white);
					border: var(--obj-button-secondary-disabled-border, 1px solid lightgrey);

					color: var(--obj-button-secondary-disabled-font-color, lightgrey);
				}

				:host([disabled][type="primary"]) > .container {
					background: var(--obj-button-primary-disabled-background, lightgrey);
					border: var(--obj-button-primary-disabled-border, 1px solid lightgrey);

					color: var(--obj-button-primary-disabled-font-color, white);
				}

				/* INVERT */

				:host([invert]) > .container,
				:host([invert][type="secondary"]) > .container {
					background: var(--obj-button-secondary-invert-background, transparent);
					border: var(--obj-button-secondary-invert-border, 1px solid white);

					color: var(--obj-button-secondary-invert-font-color, white);
				}

				:host([invert][type="primary"]) > .container {
					background: var(--obj-button-primary-invert-background, white);
					border: var(--obj-button-primary-invert-border, 1px solid white);

					color: var(--obj-button-primary-invert-font-color, grey);
				}
			`
		];
	}

	/**
	 * Apply changes to the element DOM when a property value changes.
	 * 
	 * @returns {TemplateResult} The updated DOM template.
	 */
	override render() {

		return html`
			<div
				part="button"
				class="container"
				@click=${this.#handleClick}>
				${this.label}
				<slot></slot>
			</div>
		`;
	}
}
