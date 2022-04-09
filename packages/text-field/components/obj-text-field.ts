import { html, css, LitElement, CSSResultGroup, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A simple text input component.
 * 
 * ## Installation
 * ```sh
 * npm install @objekt/web-components/text-field
 * ```
 * 
 * @example
 *
 * ```html
 * Primary:
 * 
 * <obj-text-field label="Username"></obj-text-field>
 * ```
 * 
 * @element obj-text-field
 * 
 * @property {string} [label=''] - The text field display label.
 * @property {string} [value=''] - The value entered into the text field.
 * @property {string} [placeholder=''] - The default text to display in the text field when the value is not set.
 *
 * @property {boolean} [invert] - Set to invert the component colors for rendering on dark backgrounds.
 * 
 * @fires input - Dispatched when the text in entered into the field.
 * 
 * @csspart input-field - The input field container.
 * 
 * @cssprop --obj-text-field-border-radius
 * @cssprop --obj-text-field-padding
 * @cssprop --obj-text-field-text-align
 * 
 * @cssprop --obj-text-field-primary-background
 * @cssprop --obj-text-field-primary-border
 * @cssprop --obj-text-field-primary-font-color
 * @cssprop --obj-text-field-primary-font-family
 * @cssprop --obj-text-field-primary-font-size
 * @cssprop --obj-text-field-primary-font-weight
 *
 * @cssprop --obj-text-field-primary-disabled-background
 * @cssprop --obj-text-field-primary-disabled-border
 * @cssprop --obj-text-field-primary-disabled-font-color
 *
 * @cssprop --obj-text-field-primary-invert-background
 * @cssprop --obj-text-field-primary-invert-border
 * @cssprop --obj-text-field-primary-invert-font-color
 * 
 * @cssprop --obj-text-field-secondary-background
 * @cssprop --obj-text-field-secondary-border
 * @cssprop --obj-text-field-secondary-font-color
 * @cssprop --obj-text-field-secondary-font-family
 * @cssprop --obj-text-field-secondary-font-size
 * @cssprop --obj-text-field-secondary-font-weight
 *
 * @cssprop --obj-text-field-secondary-disabled-background
 * @cssprop --obj-text-field-secondary-disabled-border
 * @cssprop --obj-text-field-secondary-disabled-font-color
 * 
 * @cssprop --obj-text-field-secondary-invert-background
 * @cssprop --obj-text-field-secondary-invert-border
 * @cssprop --obj-text-field-secondary-invert-font-color
 */
@customElement('obj-text-field')
export class TextField extends LitElement {

  @property({ type: String, reflect: true }) public label = null;
  @property({ type: String, reflect: true }) public value = null;
  @property({ type: String, reflect: true }) public placeholder = null;
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
					align-items: flex-start;
					justify-content: flex-start;

					width: 100%;
				}

				/* INPUT FIELD */

				label {
					color: var(--obj-text-field-label-font-color, black);
					font-family: var(--obj-text-field-label-font-family, Arial);
					font-size: var(--obj-text-field-label-font-size, 12px);
					font-weight: var(--obj-text-field-label-font-weight, normal);
				}

				input {
					border-radius: var(--obj-text-field-border-radius, 0px);
					padding: var(--obj-text-field-padding, 10px);
					text-align: var(--obj-text-field-text-align, left);

					background: var(--obj-text-field-input-background, white);
					border: var(--obj-text-field-input-border, 1px solid grey);

					color: var(--obj-text-field-input-font-color, black);
					font-family: var(--obj-text-field-input-font-family, Arial);
					font-size: var(--obj-text-field-input-font-size, 12px);
					font-weight: var(--obj-text-field-input-font-weight, normal);
				}

				:host([disabled]) label {
					color: var(--obj-text-field-input-disabled-font-color, grey);
				}

				:host([disabled]) input {
					color: var(--obj-text-field-input-disabled-font-color, grey);
					border: var(--obj-text-field-input-disabled-border, 1px solid grey);
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
			<div class="container">
				${this.label? html`
					<label for="input-field">${this.label}</label>
				` : html`` }
				<input
					id="input-field"
					part="input-field"
					type="text"
					.value="${this.value}"
					.placeholder="${this.placeholder}"
					?disabled="${this.disabled}">
			</div>
		`;
	}
}
