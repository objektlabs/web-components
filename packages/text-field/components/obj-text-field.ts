import { html, css, LitElement, CSSResultGroup, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * A simple text input component.
 * 
 * &#128161; [Live demo](https://objektlabs.github.io/web-components/?path=/story/inputs-text-field)
 * 
 * ## Installation
 * ```sh
 * npm install @objekt/obj-text-field
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
 * @cssprop --obj-input-border-radius
 * @cssprop --obj-input-padding
 * @cssprop --obj-input-text-align
 * 
 * @cssprop --obj-input-primary-background
 * @cssprop --obj-input-primary-border
 * @cssprop --obj-input-primary-font-color
 * @cssprop --obj-input-primary-font-family
 * @cssprop --obj-input-primary-font-size
 * @cssprop --obj-input-primary-font-weight
 *
 * @cssprop --obj-input-primary-disabled-background
 * @cssprop --obj-input-primary-disabled-border
 * @cssprop --obj-input-primary-disabled-font-color
 *
 * @cssprop --obj-input-primary-invert-background
 * @cssprop --obj-input-primary-invert-border
 * @cssprop --obj-input-primary-invert-font-color
 * 
 * @cssprop --obj-input-secondary-background
 * @cssprop --obj-input-secondary-border
 * @cssprop --obj-input-secondary-font-color
 * @cssprop --obj-input-secondary-font-family
 * @cssprop --obj-input-secondary-font-size
 * @cssprop --obj-input-secondary-font-weight
 *
 * @cssprop --obj-input-secondary-disabled-background
 * @cssprop --obj-input-secondary-disabled-border
 * @cssprop --obj-input-secondary-disabled-font-color
 * 
 * @cssprop --obj-input-secondary-invert-background
 * @cssprop --obj-input-secondary-invert-border
 * @cssprop --obj-input-secondary-invert-font-color
 */
@customElement('obj-text-field')
export class TextField extends LitElement {

	@property({ type: String, reflect: true }) public label?: string;
	@property({ type: String, reflect: true }) public value?: string;
	@property({ type: String, reflect: true }) public placeholder?: string;
	@property({ type: String, reflect: true }) public type?: string;
	@property({ type: String, reflect: true }) public labelPosition?: string;
	@property({ type: String, reflect: true }) public error?: string = 'test';
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

	_handleInput(e: InputEvent) {

		this.value = (<HTMLInputElement>e?.target).value || undefined;
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
					align-items: stretch;
					justify-content: flex-start;

					width: 100%;
				}

				/* INPUT FIELD */

				label {
					
				}

				input {
					font-family: var(--obj-input-font-family, Arial);
					font-size: var(--obj-input-font-size, 12px);
					font-weight: var(--obj-input-font-weight, normal);

					color: var(--obj-input-font-color, black);
					background-color: transparent;

					text-align: var(--obj-input-text-align, left);

					border: none;
					outline: none;
					padding: 0px;
					margin: 0px;
				}

				label > div {
					font-family: var(--obj-input-label-font-family, Arial);
					font-size: var(--obj-input-label-font-size, 12px);
					font-weight: var(--obj-input-label-font-weight, normal);

					color: var(--obj-input-label-font-color, black);

					text-align: var(--obj-input-text-align, left);
				}

				/* TYPE - PRIMARY */
				
				label,
				:host([type="primary"]) label {
					background: var(--obj-input-background, white);

					border-radius: var(--obj-input-border-radius, 5px);

					border-top: var(--obj-input-border, 1px solid grey);
					border-bottom: var(--obj-input-border, 1px solid grey);
					border-left: var(--obj-input-border, 1px solid grey);
					border-right: var(--obj-input-border, 1px solid grey);
				}

				label:focus-within,
				:host([type="primary"]) label:focus-within {
					outline: var(--obj-input-focus-border, 1px solid black);
					outline-offset: var(--obj-input-focus-border-offset, 0px);
				}

				/* TYPE - SECONDARY */

				:host([type="secondary"]) label {
					border-radius: 0px;
					
					border-top: none;
					border-bottom: var(--obj-input-border, 1px solid grey);
					border-left: none;
					border-right: none;

					background-color: transparent;
				}

				:host([type="secondary"]) label:focus-within {
					outline: none;
				}
				
				:host([type="secondary"]) label:focus-within::after {
					content: "";
					width: 100%;
					position: absolute;
					bottom: 0px;
					left: 0px;
					right: 0px;
					border-bottom: var(--obj-input-focus-border, 1px solid grey);
				}

				/* LABEL POSITION ABOVE */



				/* LABEL POSITION INLINE */

				/*
				label {
					position: relative;
				}

				label {
					color: var(--obj-input-label-font-color, black);
					font-family: var(--obj-input-label-font-family, Arial);
					font-size: var(--obj-input-label-font-size, 12px);
					font-weight: var(--obj-input-label-font-weight, normal);

					text-align: left;
					text-overflow: ellipsis;
					white-space: nowrap;

					pointer-events: none;

					transform-origin: left top;

					transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
				}

				input {
					border-radius: var(--obj-input-input-border-radius, 5px);
					padding: var(--obj-input-padding-y, 10px) var(--obj-input-padding-x, 10px);
					text-align: var(--obj-input-text-align, left);

					background: var(--obj-input-input-background, white);
					border: var(--obj-input-input-border, 1px solid grey);

					color: var(--obj-input-input-font-color, black);
					font-family: var(--obj-input-input-font-family, Arial);
					font-size: var(--obj-input-font-size, 12px);
					font-weight: var(--obj-input-input-font-weight, normal);
				}

				input:focus {
					border: var(--obj-input-input-border, 1px solid black);
					outline: none;
				}

				
				label {
					position: absolute;
					left: var(--obj-input-padding-x, 10px);
					top: 50%;
					transform: translateY(-50%);
				}

				input[value] + label,
				input[placeholder] + label,
				input:focus + label {
					color: red;
					font-size: 0.75rem;
					top: 0px;
				}

				input[value] + label::before, input[placeholder] + label::before, input:focus + label::before {
					content: "";
					display: block;
					height: 1px;
					background-color: white;
					position: absolute;
					left: -3px;
					right: -3px;
					top: 50%;
					z-index: -1;
				}
				*/

				/* LABEL POSITION INSIDE */

				label.position-inside {
					display: flex;
					flex-direction: column-reverse;
					align-items: flex-start;
					justify-content: center;

					position: relative;

					padding: var(--obj-input-padding-y, 10px) var(--obj-input-padding-x, 10px);
				}

				label.position-inside > div {
					position: absolute;
					transition: all 150ms ease 0s;
					top: 50%;
					left: var(--obj-input-padding-x);
					right: var(--obj-input-padding-x);
					
					transform: translateY(-50%);
					pointer-events: none;
					user-select: none;

					padding: 0px;
					margin: 0px;
					height: var(--obj-input-label-font-size, 12px);
					line-height: var(--obj-input-label-font-size, 12px);
					
					transform-origin: top var(--obj-input-text-align, left);
				}

				label.position-inside > input[value] + div,
				label.position-inside > input[placeholder] + div,
				label.position-inside > input:focus + div {
					top: var(--obj-input-padding-y, 10px);
					transform: translateY(0%) scale(75%);
					color: var(--obj-input-focus-label-font-color, black);
				}

				:host([label]) label.position-inside > input {
					margin-top: var(--obj-input-label-font-size, 12px);
				}

				label.position-inside > input[value],
				label.position-inside > input[placeholder],
				label.position-inside > input:focus {
					/*transform: translateY(50%);*/
				}




				/* DISABLED */
				
				:host([disabled]) label {
					color: var(--obj-input-input-disabled-font-color, grey);
				}

				:host([disabled]) input {
					color: var(--obj-input-input-disabled-font-color, grey);
					border: var(--obj-input-input-disabled-border, 1px solid grey);
				}

				/* ERROR */

				.error {
					font-family: var(--obj-input-error-font-family, sans-serif);
					font-size: var(--obj-input-error-font-size, 12px);
					font-weight: var(--obj-input-error-font-weight, normal);

					text-align: var(--obj-input-text-align, left);

					color: var(--obj-input-error-font-color, red);

					padding-top: var(--obj-input-line-gap, 10px);
					padding-bottom: 0px;
					padding-left: var(--obj-input-padding-x, 10px);
					padding-right: var(--obj-input-padding-x, 10px);
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
				<label class="input-box position-${this.labelPosition || 'inside'}">
					<input
						id="input-field"
						part="input-field"
						type="text"
						value="${ifDefined(this.value)}"
						placeholder="${ifDefined(this.placeholder)}"
						?disabled="${this.disabled}"
						@input="${(e: InputEvent) => this._handleInput(e)}">
					${this.label ? html`<div>${this.label}</div>` : html``}
				</label>
				<!--
				<div class="input-box position-inside">
					<input
						id="input-field"
						part="input-field"
						type="text"
						value="${ifDefined(this.value)}"
						placeholder="${ifDefined(this.placeholder)}"
						?disabled="${this.disabled}"
						@input="${(e: InputEvent) => this._handleInput(e)}">
					${this.label ? html`
						<label for="input-field">${this.label}</label>
					` : html``}
				</div>-->
				${this.error ? html`
					<div class="error">${this.error}</div>
				` : html``}
			</div>
		`;
	}
}
