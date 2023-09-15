import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ClassInfo, classMap } from 'lit/directives/class-map.js';

/**
 * A multi-variant text input component.
 * 
 * 💡 **Demo**:
 * [Stack](https://objektlabs.github.io/web-components/?path=/docs/components-text-field-stack--docs) |
 * [Outline](https://objektlabs.github.io/web-components/?path=/docs/components-text-field-outline--docs) |
 * [Inline](https://objektlabs.github.io/web-components/?path=/docs/components-text-field-inline--docs) |
 * [Filled](https://objektlabs.github.io/web-components/?path=/docs/components-text-field-filled--docs) |
 * [Clear](https://objektlabs.github.io/web-components/?path=/docs/components-text-field-clear--docs)
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
 * @property {string} [type] - The text field variant type, e.g. stack, outline, inline, filled, or clear.
 * @property {string} [label] - The text field display label.
 * @property {string} [value] - The value entered into the text field.
 * @property {string} [placeholder] - The default text to display in the text field when the value is not set.
 * @property {string} [message] - A guide message to show under the text field.
 * 
 * @property {boolean} [error] - Set to place the component in an error state.
 * @property {boolean} [invert] - Set to invert the component colors for rendering on dark backgrounds.
 * @property {boolean} [disabled] - Sets to place the component in an disabled state.
 * 
 * @fires {CustomEvent} value-changed - Dispatched when the text in entered into the field.
 */
@customElement('obj-text-field')
export class TextField extends LitElement {

	@property({ type: String, reflect: true }) type?: 'stack' | 'inline' | 'outline' | 'clear' | 'filled';
	@property({ type: String, reflect: true }) label?: string;
	@property({ type: String, reflect: true }) value?: string;
	@property({ type: String, reflect: true }) placeholder?: string;
	@property({ type: String, reflect: true }) message?: string;

	@property({ type: Boolean, reflect: true }) error?: boolean;
	@property({ type: Boolean, reflect: true }) invert?: boolean;
	@property({ type: Boolean, reflect: true }) disabled?: boolean;

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

	private handleInput(e: InputEvent): void {

		this.value = (<HTMLInputElement>e?.target).value || undefined;

		this.dispatchEvent(new CustomEvent('value-changed', {
			detail: this.value,
			bubbles: true,
			composed: true
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
	 * @type {CSSResultGroup}
	 */
	static override styles = [
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

				font-family: var(--obj-input-font-family, Arial);
			}

			/* TOUCH ZONE */

			.touch-zone {
				position: relative;

				display: flex;
				flex-direction: column-reverse;
				align-items: flex-start;
				justify-content: center;

				padding: var(--obj-input-padding-y, 10px) var(--obj-input-padding-x, 10px);
			}

			.touch-zone > input {
				font-size: var(--obj-input-font-size, 14px);
				font-weight: var(--obj-input-font-weight, normal);

				color: var(--obj-input-font-color, black);
				background-color: transparent;

				text-align: var(--obj-input-text-align, left);

				border: none;
				outline: none;
				padding: 0px;
				margin: 0px;
			}

			:host([value]) .touch-zone > .label,
			:host([placeholder]) .touch-zone > .label,
			.touch-zone > input:focus + .label {
				color: var(--obj-input-focus-label-font-color, black);
			}

			.touch-zone > .label {
				position: absolute;

				top: 50%;
				transform: translateY(-50%);
				transform-origin: top var(--obj-input-text-align, left);

				transition: all 150ms ease 0s;

				pointer-events: none;
				user-select: none;

				padding: 0px;
				margin: 0px;

				height: var(--obj-input-label-font-size, 14px);
				line-height: 100%;

				font-size: var(--obj-input-label-font-size, 14px);
				font-weight: var(--obj-input-label-font-weight, normal);

				color: var(--obj-input-label-font-color, black);

				text-align: var(--obj-input-text-align, left);
			
				left: var(--obj-input-padding-x);
				right: var(--obj-input-padding-x);
			}

			.touch-zone > .label > span {
				position: relative;
			}

			.touch-zone > .border {
				position: absolute;
				top: 0px;
				bottom: 0px;
				left: 0px;
				right: 0px;

				z-index: -1;

				background: var(--obj-input-background, white);

				border-radius: var(--obj-input-border-radius, 0px);

				border-top: var(--obj-input-border, 1px solid grey);
				border-bottom: var(--obj-input-border, 1px solid grey);
				border-left: var(--obj-input-border, 1px solid grey);
				border-right: var(--obj-input-border, 1px solid grey);
			}

			/* TYPE - STACK */

			.type-stack .touch-zone {
				padding-left: 0px;
				padding-right: 0px;
			}

			.type-stack .touch-zone > .border {
				top: var(--obj-input-line-gap, 10px);
				margin-top: var(--obj-input-label-font-size, 14px);
			}

			.type-stack .touch-zone > .label {
				position: relative;

				top: 0px;
				transform: translateY(-37.5%) scale(75%);

				left: 0px;
				right: 0px;
				width: 100%;
			}

			:host([label]) .type-stack .touch-zone > input {
				margin-top: var(--obj-input-line-gap, 10px);
				padding-left: var(--obj-input-padding-x, 10px);
				padding-right: var(--obj-input-padding-x, 10px);
			}

			/* TYPE - OUTLINE */

			:host([value]) .type-outline .touch-zone > .label,
			:host([placeholder]) .type-outline .touch-zone > .label,
			.type-outline .touch-zone > input:focus + .label {
				top: 0px;
				transform: translateY(-37.5%) scale(75%);
			}

			:host([value]) .type-outline .touch-zone > .label > span::before,
			:host([placeholder]) .type-outline .touch-zone > .label > span::before,
			.type-outline .touch-zone > input:focus + .label > span::before {
				content: "";
				display: block;
				height: 100%;
				background-color: var(--obj-input-background, white);
				position: absolute;
				left: -3px;
				right: -3px;
				top: 50%;
				height: 50%;
				z-index: -1;
			}

			/* TYPE - INLINE */

			:host([value]) .type-inline .touch-zone > .label,
			:host([placeholder]) .type-inline .touch-zone > .label,
			.type-inline .touch-zone > input:focus + .label {
				top: var(--obj-input-padding-y, 10px);
				transform: translateY(0%) scale(75%);
			}

			:host([label]) .type-inline .touch-zone > input {
				margin-top: var(--obj-input-label-font-size, 14px);
			}

			/* TYPE - FILLED */

			:host([value]) .type-filled .touch-zone > .label,
			:host([placeholder]) .type-filled .touch-zone > .label,
			.type-filled .touch-zone > input:focus + .label {
				top: 0px;
				transform: translateY(-37.5%) scale(75%);
			}

			.type-filled .touch-zone > .border {
				background-color: var(--obj-input-background, white);

				border-radius: 0px;
				
				border-top: none;
				border-bottom: var(--obj-input-border, 1px solid grey);
				border-left: none;
				border-right: none;
			}

			/* TYPE - CLEAR */

			:host([value]) .type-clear .touch-zone > .label,
			:host([placeholder]) .type-clear .touch-zone > .label,
			.type-clear .touch-zone > input:focus + .label {
				top: 0px;
				transform: translateY(-37.5%) scale(75%);
			}

			.type-clear .touch-zone > .border {
				background-color: transparent;

				border-radius: 0px;
				
				border-top: none;
				border-bottom: var(--obj-input-border, 1px solid grey);
				border-left: none;
				border-right: none;
			}

			/* MESSAGE */

			.message {
				font-size: var(--obj-input-message-font-size, 12px);
				font-weight: var(--obj-input-message-font-weight, normal);

				text-align: var(--obj-input-text-align, left);

				color: var(--obj-input-message-font-color, black);

				padding-top: var(--obj-input-line-gap, 10px);
				padding-bottom: 0px;
				padding-left: var(--obj-input-padding-x, 10px);
				padding-right: var(--obj-input-padding-x, 10px);
			}

			/* ERROR */

			.error .touch-zone > .label {
				color: var(--obj-input-error-font-color, red) !important;
			}

			.error.type-stack .touch-zone > .border,
			.error.type-outline .touch-zone > .border,
			.error.type-inline .touch-zone > .border {
				background-color: var(--obj-input-error-background, white);

				border-top: var(--obj-input-error-border, 1px solid red);
				border-bottom: var(--obj-input-error-border, 1px solid red);
				border-left: var(--obj-input-error-border, 1px solid red);
				border-right: var(--obj-input-error-border, 1px solid red);
			}
			
			.error.type-filled .touch-zone > .border {
				background-color: var(--obj-input-error-background, white);

				border-bottom: var(--obj-input-error-border, 1px solid red);
			}

			.error.type-clear .touch-zone > .border {
				border-bottom: var(--obj-input-error-border, 1px solid red);
			}

			.error .message {
				color: var(--obj-input-error-font-color, red) !important;
			}

			/* INVERT */

			.invert .touch-zone > input {
				color: var(--obj-input-invert-font-color, white) !important;
			}

			.invert .touch-zone > .label {
				color: var(--obj-input-invert-font-color, white) !important;

				transition: none;
			}

			.invert.type-stack .touch-zone > .border,
			.invert.type-outline .touch-zone > .border,
			.invert.type-inline .touch-zone > .border {
				background-color: var(--obj-input-invert-background, transparent);

				border-top: var(--obj-input-invert-border, 1px solid white);
				border-bottom: var(--obj-input-invert-border, 1px solid white);
				border-left: var(--obj-input-invert-border, 1px solid white);
				border-right: var(--obj-input-invert-border, 1px solid white);
			}

			.invert.type-filled .touch-zone > .border {
				background-color: var(--obj-input-invert-background, transparent);

				border-bottom: var(--obj-input-invert-border, 1px solid white);
			}

			.invert.type-clear .touch-zone > .border {
				border-bottom: var(--obj-input-invert-border, 1px solid white);
			}

			.invert .message {
				color: var(--obj-input-invert-font-color, white) !important;
			}

			/* HOVER */

			.type-stack .touch-zone:hover > .border,
			.type-outline .touch-zone:hover > .border,
			.type-inline .touch-zone:hover > .border {
				background-color: var(--obj-input-hover-background, white);
				
				border-top: var(--obj-input-hover-border, 1px solid grey);
				border-bottom: var(--obj-input-hover-border, 1px solid grey);
				border-left: var(--obj-input-hover-border, 1px solid grey);
				border-right: var(--obj-input-hover-border, 1px solid grey);
			}

			.type-filled .touch-zone:hover > .border {
				background-color: var(--obj-input-hover-background, white);

				border-bottom: var(--obj-input-hover-border, 1px solid grey);
			}
			
			.type-clear .touch-zone:hover > .border {
				border-bottom: var(--obj-input-hover-border, 1px solid grey);
			}

			/** FOCUS */

			.type-stack .touch-zone:focus-within > .border,
			.type-outline .touch-zone:focus-within > .border,
			.type-inline .touch-zone:focus-within > .border {
				border: var(--obj-input-focus-border, 1px solid black) !important;
			}

			.type-filled .touch-zone:focus-within > .border,
			.type-clear .touch-zone:focus-within > .border {
				border-bottom: var(--obj-input-focus-border, 1px solid black) !important;
			}

			/* DISABLED */

			.disabled .touch-zone > input {
				color: var(--obj-input-disabled-font-color, lightgrey) !important;
			}

			.disabled .touch-zone > .label {
				color: var(--obj-input-disabled-font-color, lightgrey) !important;

				transition: none;
			}

			.disabled.type-stack .touch-zone > .border,
			.disabled.type-outline .touch-zone > .border,
			.disabled.type-inline .touch-zone > .border {
				background-color: var(--obj-input-disabled-background, white);

				border-top: var(--obj-input-disabled-border, 1px solid lightgrey);
				border-bottom: var(--obj-input-disabled-border, 1px solid lightgrey);
				border-left: var(--obj-input-disabled-border, 1px solid lightgrey);
				border-right: var(--obj-input-disabled-border, 1px solid lightgrey);
			}

			.disabled.type-filled .touch-zone > .border {
				background-color: var(--obj-input-disabled-background, white);

				border-bottom: var(--obj-input-disabled-border, 1px solid lightgrey);
			}

			.disabled.type-clear .touch-zone > .border {
				border-bottom: var(--obj-input-disabled-border, 1px solid lightgrey);
			}

			.disabled .message {
				color: var(--obj-input-disabled-font-color, lightgrey) !important;
			}
		`
	];

	/**
	 * Apply changes to the element DOM when a property value changes.
	 * 
	 * @returns The updated DOM template.
	 */
	override render(): TemplateResult {

		// Calculate the state classes to apply to the component.
		const classes: ClassInfo = {
			'container': true,
			['type-' + this.type ?? 'inline']: true,
			'error': this.error === true,
			'disabled': this.disabled === true,
			'invert': this.invert === true,
		};

		// Generate the component template.
		return html`
			<div class="${classMap(classes)}">
				<label class="touch-zone">
					<div class="border"></div>
					<input
						id="input-field"
						part="input-field"
						type="text"
						.value="${this.value ?? ''}"
						.placeholder="${this.placeholder ?? ''}"
						?disabled="${this.disabled}"
						@input="${(e: InputEvent) => this.handleInput(e)}">
					${this.label ? html`<div class="label"><span>${this.label}</span></div>` : html``}
				</label>
				${this.message ? html`<div class="message">${this.message}</div>` : html``}
			</div>
		`;
	}
}