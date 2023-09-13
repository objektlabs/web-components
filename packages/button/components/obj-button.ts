import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ClassInfo, classMap } from 'lit/directives/class-map.js';

/**
 * A multi-variant clickable button component.
 * 
 * 💡 **Demo**:
 * [Primary](https://objektlabs.github.io/web-components/?path=/docs/components-button-primary--docs) |
 * [Secondary](https://objektlabs.github.io/web-components/?path=/docs/components-button-secondary--docs) |
 * [Clear](https://objektlabs.github.io/web-components/?path=/docs/components-button-clear--docs)
 * 
 * ## Installation
 * ```sh
 * npm install @objekt/obj-button
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
 * 
 * Clear:
 * 
 * <obj-button label="Clear" type="clear"></obj-button>
 * <obj-button label="Disabled" type="clear" disabled></obj-button>
 * <obj-button label="Invert" type="clear" invert></obj-button>
 * ```
 * 
 * @element obj-button
 * 
 * @property {string} [type='secondary'] - The button display type. e.g. primary, secondary.
 * @property {string} [label=''] - The button display label.
 * 
 * @property {boolean} [invert] - Set to invert the component colors for rendering on dark backgrounds.
 * @property {boolean} [disabled] - Sets to place the component in an disabled state.
 * 
 * @fires {CustomEvent} click - Dispatched when the button is clicked.
 * 
 * @csspart button - The button container.
 * 
 * @cssprop --obj-button-border-radius - Button corner radius.
 * @cssprop --obj-button-padding - Button internal padding.
 * @cssprop --obj-button-text-align - Horizontal text alignment.
 * 
 * @cssprop --obj-button-font-family - Button font family.
 * @cssprop --obj-button-font-size - Button font size.
 * @cssprop --obj-button-font-weight - Button font weight.
 * 
 * @cssprop --obj-button-primary-background - Primary button background color.
 * @cssprop --obj-button-primary-border - Primary button border.
 * @cssprop --obj-button-primary-font-color - Primary button font color.
 *
 * @cssprop --obj-button-primary-disabled-background - Primary button disabled background color.
 * @cssprop --obj-button-primary-disabled-border - Primary button disabled border.
 * @cssprop --obj-button-primary-disabled-font-color - Primary button disabled font color.
 *
 * @cssprop --obj-button-primary-invert-background - Primary button invert background color.
 * @cssprop --obj-button-primary-invert-border - Primary button invert border.
 * @cssprop --obj-button-primary-invert-font-color - Primary button invert font color.
 * 
 * @cssprop --obj-button-secondary-background - Secondary button background color.
 * @cssprop --obj-button-secondary-border - Secondary button border.
 * @cssprop --obj-button-secondary-font-color - Secondary button font color.
 *
 * @cssprop --obj-button-secondary-disabled-background - Secondary button disabled background color.
 * @cssprop --obj-button-secondary-disabled-border - Secondary button disabled border.
 * @cssprop --obj-button-secondary-disabled-font-color - Secondary button disabled font color.
 *
 * @cssprop --obj-button-secondary-invert-background - Secondary button invert background color.
 * @cssprop --obj-button-secondary-invert-border - Secondary button invert border.
 * @cssprop --obj-button-secondary-invert-font-color - Secondary button invert font color.
 * 
 * @cssprop --obj-button-clear-background - Clear button background color.
 * @cssprop --obj-button-clear-border - Clear button border.
 * @cssprop --obj-button-clear-font-color - Clear button font color.
 *
 * @cssprop --obj-button-clear-disabled-background - Clear button disabled background color.
 * @cssprop --obj-button-clear-disabled-border - Clear button disabled border.
 * @cssprop --obj-button-clear-disabled-font-color - Clear button disabled font color.
 *
 * @cssprop --obj-button-clear-invert-background - Clear button invert background color.
 * @cssprop --obj-button-clear-invert-border - Clear button invert border.
 * @cssprop --obj-button-clear-invert-font-color - Clear button invert font color.
 */
@customElement('obj-button')
export class Button extends LitElement {

	@property({ type: String, reflect: true }) type?: 'primary' | 'secondary' | 'clear';
	@property({ type: String, reflect: true }) label?: string;

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

	handleClick(e: MouseEvent): void {

		e.preventDefault();
		e.stopPropagation();

		this.dispatchEvent(new CustomEvent('click', {
			detail: null,
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
				align-items: center;
				justify-content: center;

				width: 100%;

				border-radius: var(--obj-button-border-radius, 0px);
				padding: var(--obj-button-padding, 10px);
				text-align: var(--obj-button-text-align, center);

				font-family: var(--obj-button-font-family, Arial);
				font-size: var(--obj-button-font-size, 12px);
				font-weight: var(--obj-button-font-weight, normal);
				
				cursor: pointer;
				user-select: none;

				transition: all 0.25s;
			}

			/* TYPE - PRIMARY */

			.type-primary {
				background: var(--obj-button-primary-background, grey);
				border: var(--obj-button-primary-border, 1px solid grey);
				color: var(--obj-button-primary-font-color, white);
			}

			.type-primary:hover {
				background: var(--obj-button-primary-hover-background, grey);
				border: var(--obj-button-primary-hover-border, 1px solid grey);
				color: var(--obj-button-primary-hover-font-color, white);
			}

			.type-primary.disabled {
				background: var(--obj-button-primary-disabled-background, lightgrey);
				border: var(--obj-button-primary-disabled-border, 1px solid lightgrey);
				color: var(--obj-button-primary-disabled-font-color, white);

				cursor: default;
			}

			/* TYPE - PRIMARY - INVERT */

			.type-primary.invert {
				background: var(--obj-button-primary-invert-background, white);
				border: var(--obj-button-primary-invert-border, 1px solid white);
				color: var(--obj-button-primary-invert-font-color, grey);
			}

			.type-primary.invert:hover {
				background: var(--obj-button-primary-invert-hover-background, grey);
				border: var(--obj-button-primary-invert-hover-border, 1px solid grey);
				color: var(--obj-button-primary-invert-hover-font-color, white);
			}

			.type-primary.disabled.invert {
				background: var(--obj-button-primary-invert-disabled-background, lightgrey);
				border: var(--obj-button-primary-invert-disabled-border, 1px solid lightgrey);
				color: var(--obj-button-primary-invert-disabled-font-color, white);

				cursor: default;
			}

			/* TYPE - SECONDARY */

			.type-secondary {
				background: var(--obj-button-secondary-background, transparent);
				border: var(--obj-button-secondary-border, 1px solid grey);
				color: var(--obj-button-secondary-font-color, grey);
			}

			.type-secondary:hover {
				background: var(--obj-button-secondary-hover-background, grey);
				border: var(--obj-button-secondary-hover-border, 1px solid grey);
				color: var(--obj-button-secondary-hover-font-color, white);
			}

			.type-secondary.disabled {
				background: var(--obj-button-secondary-disabled-background, white);
				border: var(--obj-button-secondary-disabled-border, 1px solid lightgrey);
				color: var(--obj-button-secondary-disabled-font-color, lightgrey);

				cursor: default;
			}

			/* TYPE - SECONDARY - INVERT */

			.type-secondary.invert {
				background: var(--obj-button-secondary-invert-background, transparent);
				border: var(--obj-button-secondary-invert-border, 1px solid white);
				color: var(--obj-button-secondary-invert-font-color, white);
			}

			.type-secondary.invert:hover {
				background: var(--obj-button-secondary-invert-hover-background, white);
				border: var(--obj-button-secondary-invert-hover-border, 1px solid white);
				color: var(--obj-button-secondary-invert-hover-font-color, grey);
			}

			.type-secondary.disabled.invert {
				background: var(--obj-button-secondary-invert-disabled-background, transparent);
				border: var(--obj-button-secondary-invert-disabled-border, 1px solid lightgrey);
				color: var(--obj-button-secondary-invert-disabled-font-color, lightgrey);

				cursor: default;
			}

			/* TYPE - CLEAR */

			.type-clear {
				background: var(--obj-button-clear-background, transparent);
				border: var(--obj-button-clear-border, 1px solid transparent);
				color: var(--obj-button-clear-font-color, grey);
			}

			.type-clear:hover {
				background: var(--obj-button-clear-hover-background, grey);
				border: var(--obj-button-clear-hover-border, 1px solid grey);
				color: var(--obj-button-clear-hover-font-color, white);
			}

			.type-clear.disabled {
				background: var(--obj-button-clear-disabled-background, transparent);
				border: var(--obj-button-clear-disabled-border, 1px solid transparent);
				color: var(--obj-button-clear-disabled-font-color, lightgrey);

				cursor: default;
			}

			/* TYPE - CLEAR - INVERT */

			.type-clear.invert {
				background: var(--obj-button-clear-invert-background, transparent);
				border: var(--obj-button-clear-invert-border, 1px solid transparent);
				color: var(--obj-button-clear-invert-font-color, white);
			}

			.type-clear.invert:hover {
				background: var(--obj-button-clear-invert-hover-background, transparent);
				border: var(--obj-button-clear-invert-hover-border, 1px solid transparent);
				color: var(--obj-button-clear-invert-hover-font-color, grey);
			}

			.type-clear.disabled.invert {
				background: var(--obj-button-clear-invert-disabled-background, transparent);
				border: var(--obj-button-clear-invert-disabled-border, 1px solid transparent);
				color: var(--obj-button-clear-invert-disabled-font-color, lightgrey);

				cursor: default;
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
			['type-' + this.type ?? 'primary']: true,
			'disabled': this.disabled === true,
			'invert': this.invert === true,
		};

		// Generate the component template.
		return html`
			<button
				part="button"
				class="${classMap(classes)}"
				@click=${this.handleClick}>
				${this.label || html`&nbsp;`}
				<slot></slot>
			</button>
		`;
	}
}
