"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var lit_1 = require("lit");
var decorators_js_1 = require("lit/decorators.js");
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
 * @property {boolean} [invert] - Set to invert the component colours for rendering on dark backgrounds.
 *
 * @fires click - Dispatched when the button is clicked.
 *
 * @csspart button - The button container.
 *
 * @cssprop --obj-button-border-radius
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
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    // ------------
    // CONSTRUCTORS
    // ------------
    /**
     * Initialise the component.
     */
    function Button() {
        var _this = _super.call(this) || this;
        _this.type = 'secondary';
        _this.label = '';
        _this.invert = false;
        return _this;
    }
    Object.defineProperty(Button, "styles", {
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
        get: function () {
            return [
                (0, lit_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t\t/* HOST */\n\n        :host {\n          display: inline-flex;\n        }\n\n\t\t\t\t.container {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n\n          width: 100%;\n\n\t\t\t\t\tborder-radius: var(--obj-button-border-radius, 0px);\n\t\t\t\t\tpadding: var(--obj-button-padding, 10px);\n\t\t\t\t\ttext-align: var(--obj-button-text-align, center);\n\t\t\t\t}\n\n\t\t\t\t/* TYPE - PRIMARY */\n\n\t\t\t\t:host([type=\"primary\"]) > .container {\n\t\t\t\t\tbackground: var(--obj-button-primary-background, grey);\n\t\t\t\t\tborder: var(--obj-button-primary-border, 1px solid grey);\n\n\t\t\t\t\tcolor: var(--obj-button-primary-font-color, white);\n\t\t\t\t\tfont-family: var(--obj-button-primary-font-family, Arial);\n\t\t\t\t\tfont-size: var(--obj-button-primary-font-size, 12px);\n\t\t\t\t\tfont-weight: var(--obj-button-primary-font-weight, normal);\n\t\t\t\t}\n\n\t\t\t\t/* TYPE - SECONDARY */\n\n\t\t\t\t:host > .container,\n\t\t\t\t:host([type=\"secondary\"]) > .container {\n\t\t\t\t\tbackground: var(--obj-button-secondary-background, transparent);\n\t\t\t\t\tborder: var(--obj-button-secondary-border, 1px solid grey);\n\n\t\t\t\t\tcolor: var(--obj-button-secondary-font-color, grey);\n\t\t\t\t\tfont-family: var(--obj-button-secondary-font-family, Arial);\n\t\t\t\t\tfont-size: var(--obj-button-secondary-font-size, 12px);\n\t\t\t\t\tfont-weight: var(--obj-button-secondary-font-weight, normal);\n\t\t\t\t}\n\n\t\t\t\t/* DISABLED */\n\n\t\t\t\t:host([disabled]) > .container,\n\t\t\t\t:host([disabled][type=\"secondary\"]) > .container {\n\t\t\t\t\tbackground: var(--obj-button-secondary-disabled-background, white);\n\t\t\t\t\tborder: var(--obj-button-secondary-disabled-border, 1px solid lightgrey);\n\n\t\t\t\t\tcolor: var(--obj-button-secondary-disabled-font-color, lightgrey);\n\t\t\t\t}\n\n\t\t\t\t:host([disabled][type=\"primary\"]) > .container {\n\t\t\t\t\tbackground: var(--obj-button-primary-disabled-background, lightgrey);\n\t\t\t\t\tborder: var(--obj-button-primary-disabled-border, 1px solid lightgrey);\n\n\t\t\t\t\tcolor: var(--obj-button-primary-disabled-font-color, white);\n\t\t\t\t}\n\n\t\t\t\t/* INVERT */\n\n\t\t\t\t:host([invert]) > .container,\n\t\t\t\t:host([invert][type=\"secondary\"]) > .container {\n\t\t\t\t\tbackground: var(--obj-button-secondary-invert-background, transparent);\n\t\t\t\t\tborder: var(--obj-button-secondary-invert-border, 1px solid white);\n\n\t\t\t\t\tcolor: var(--obj-button-secondary-invert-font-color, white);\n\t\t\t\t}\n\n\t\t\t\t:host([invert][type=\"primary\"]) > .container {\n\t\t\t\t\tbackground: var(--obj-button-primary-invert-background, white);\n\t\t\t\t\tborder: var(--obj-button-primary-invert-border, 1px solid white);\n\n\t\t\t\t\tcolor: var(--obj-button-primary-invert-font-color, grey);\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\t/* HOST */\n\n        :host {\n          display: inline-flex;\n        }\n\n\t\t\t\t.container {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n\n          width: 100%;\n\n\t\t\t\t\tborder-radius: var(--obj-button-border-radius, 0px);\n\t\t\t\t\tpadding: var(--obj-button-padding, 10px);\n\t\t\t\t\ttext-align: var(--obj-button-text-align, center);\n\t\t\t\t}\n\n\t\t\t\t/* TYPE - PRIMARY */\n\n\t\t\t\t:host([type=\"primary\"]) > .container {\n\t\t\t\t\tbackground: var(--obj-button-primary-background, grey);\n\t\t\t\t\tborder: var(--obj-button-primary-border, 1px solid grey);\n\n\t\t\t\t\tcolor: var(--obj-button-primary-font-color, white);\n\t\t\t\t\tfont-family: var(--obj-button-primary-font-family, Arial);\n\t\t\t\t\tfont-size: var(--obj-button-primary-font-size, 12px);\n\t\t\t\t\tfont-weight: var(--obj-button-primary-font-weight, normal);\n\t\t\t\t}\n\n\t\t\t\t/* TYPE - SECONDARY */\n\n\t\t\t\t:host > .container,\n\t\t\t\t:host([type=\"secondary\"]) > .container {\n\t\t\t\t\tbackground: var(--obj-button-secondary-background, transparent);\n\t\t\t\t\tborder: var(--obj-button-secondary-border, 1px solid grey);\n\n\t\t\t\t\tcolor: var(--obj-button-secondary-font-color, grey);\n\t\t\t\t\tfont-family: var(--obj-button-secondary-font-family, Arial);\n\t\t\t\t\tfont-size: var(--obj-button-secondary-font-size, 12px);\n\t\t\t\t\tfont-weight: var(--obj-button-secondary-font-weight, normal);\n\t\t\t\t}\n\n\t\t\t\t/* DISABLED */\n\n\t\t\t\t:host([disabled]) > .container,\n\t\t\t\t:host([disabled][type=\"secondary\"]) > .container {\n\t\t\t\t\tbackground: var(--obj-button-secondary-disabled-background, white);\n\t\t\t\t\tborder: var(--obj-button-secondary-disabled-border, 1px solid lightgrey);\n\n\t\t\t\t\tcolor: var(--obj-button-secondary-disabled-font-color, lightgrey);\n\t\t\t\t}\n\n\t\t\t\t:host([disabled][type=\"primary\"]) > .container {\n\t\t\t\t\tbackground: var(--obj-button-primary-disabled-background, lightgrey);\n\t\t\t\t\tborder: var(--obj-button-primary-disabled-border, 1px solid lightgrey);\n\n\t\t\t\t\tcolor: var(--obj-button-primary-disabled-font-color, white);\n\t\t\t\t}\n\n\t\t\t\t/* INVERT */\n\n\t\t\t\t:host([invert]) > .container,\n\t\t\t\t:host([invert][type=\"secondary\"]) > .container {\n\t\t\t\t\tbackground: var(--obj-button-secondary-invert-background, transparent);\n\t\t\t\t\tborder: var(--obj-button-secondary-invert-border, 1px solid white);\n\n\t\t\t\t\tcolor: var(--obj-button-secondary-invert-font-color, white);\n\t\t\t\t}\n\n\t\t\t\t:host([invert][type=\"primary\"]) > .container {\n\t\t\t\t\tbackground: var(--obj-button-primary-invert-background, white);\n\t\t\t\t\tborder: var(--obj-button-primary-invert-border, 1px solid white);\n\n\t\t\t\t\tcolor: var(--obj-button-primary-invert-font-color, grey);\n\t\t\t\t}\n\t\t\t"])))
            ];
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Apply changes to the element DOM when a property value changes.
     *
     * @returns {TemplateResult} The updated DOM template.
     */
    Button.prototype.render = function () {
        return (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t\t\t<div part=\"button\" class=\"container\">", "</div>\n\t\t"], ["\n\t\t\t<div part=\"button\" class=\"container\">", "</div>\n\t\t"])), this.label);
    };
    __decorate([
        (0, decorators_js_1.property)({ type: 'string', reflect: true })
    ], Button.prototype, "type", void 0);
    __decorate([
        (0, decorators_js_1.property)({ type: 'string', reflect: true })
    ], Button.prototype, "label", void 0);
    __decorate([
        (0, decorators_js_1.property)({ type: 'string', reflect: true })
    ], Button.prototype, "invert", void 0);
    Button = __decorate([
        (0, decorators_js_1.customElement)('obj-button')
    ], Button);
    return Button;
}(lit_1.LitElement));
exports.Button = Button;
var templateObject_1, templateObject_2;
