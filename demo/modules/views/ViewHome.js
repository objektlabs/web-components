import { html, css, CSSResultGroup, TemplateResult } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';

import { ComponentBase } from '../framework/core/ComponentBase.js';

/**
 *
 */
@customElement('app-view-home')
export class ViewHome extends ComponentBase {

	@state() _menuVisible = false;

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

	_showMenu() {
		this._menuVisible = true;
	}

	_hideMenu() {
		this._menuVisible = false;
	}

	// -----------------
	// COMPONENT ACTIONS
	// -----------------

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

				width: 100%;
				height: 100%;
			}

			.container {
				width: 100%;
				height: 100%;

				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: stretch;

				position: relative;
			}

			.shade {
				position: absolute;
				top: 0px;
				bottom: 0px;
				left: 0px;
				right: 0px;

				display: none;

				flex: 1 1 auto;
				background-color: rgba(0, 0, 0, 0.75);
			}

			nav {
				position: absolute;
				left: -260px;
				top: 0px;
				bottom: 0px;

				color: rgb(52, 58, 64);
				font-size: 15px;
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";

				border-right: 1px solid rgb(233, 236, 239);
				background-color: rgb(255, 255, 255);
				width: 260px;

				transition: left 0.2s ease-out;
			}


			header {
				height: 60px;
				background-color: #ffffff;
				border-bottom: 1px solid #e9ecef;
			}

			main {
				flex: 1 1 auto;

				background-color: rgb(248, 249, 250);

				padding: 1em;
			}

			main > .title {
				font-size: 32px;
				line-height: 1.2;
				font-weight: 900;
				color: rgb(0, 0, 0);
				margin: 0px 0px 5px;
				font-family: "Greycliff CF", "sans serif";
				-webkit-font-smoothing: antialiased;
			}

			main > .description {
				font-size: 16px;
				-webkit-font-smoothing: antialiased;
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
				line-height: 1.55;
				text-decoration: none;
				color: rgb(134, 142, 150);
				margin-bottom: 24px;
			}

			main > .metadata {
				-webkit-font-smoothing: antialiased;
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
				-webkit-tap-highlight-color: transparent;
				font-size: 14px;
				text-decoration: none;
				color: rgb(134, 142, 150);
				line-height: 20px;

				display: grid;
				grid-template-columns: auto 1fr;
				grid-gap: 0.75em 0px;
			}

			main > .metadata > .tag {
				grid-column: 1;
				padding-right: 1em;
				min-width: 100px;
				
				display: none;
			}

			main > .metadata > .value {
				grid-column: 2;

				color: rgb(33, 37, 41);
				font-size: 14px;
			}
			
			main > .metadata > .value > svg {
				padding-right: 5px;
			}


			.pin-menu nav {
				left: 0px;
			}

			.pin-menu .shade {
				display: flex;
			}

			@media (min-width: 500px) {
				header {
					background-color: yellow;
				}

				main > .metadata > .tag {
					display: flex;
				}
			}

			@media (min-width: 760px) {
				header {
					background-color: lightblue
				}

				nav {
					left: 0px;
					top: 60px;

					transition: none;
				}

				main {
					margin-left: 260px;
				}

				.menu-toggle {
					display: none;
				}
			}

			@media (min-width: 855px) {
				header {
					background-color: pink;
				}

			}

			@media (min-width: 1080px) {
				header {
					background-color: red;
				}

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
			<div class="container ${this._menuVisible ? 'pin-menu' : ''}">
				<header>
					<button class="menu-toggle" @click="${() => this._showMenu()}">Toggle Menu</button>
					header
				</header>
	
				<main>
					<div class="title">Switch</div>
					<div class="description">Capture boolean input from user</div>
					
					<div class="metadata">
						<div class="tag">Import</div>
						<div class="value">
							<span class="token keyword" style="color: rgb(201, 42, 42);">import</span>
							<span class="token plain"> </span>
							<span class="token punctuation" style="color: rgb(73, 80, 87);">{</span>
							<span class="token plain"> </span>
							<span class="token maybe-class-name">Switch</span>
							<span class="token plain"> </span>
							<span class="token punctuation" style="color: rgb(73, 80, 87);">}</span>
							<span class="token plain"> </span>
							<span class="token keyword" style="color: rgb(201, 42, 42);">from</span>
							<span class="token plain"> </span>
							<span class="token string" style="color: rgb(54, 79, 199);">'@objekt/obj-switch'</span>
							<span class="token punctuation" style="color: rgb(73, 80, 87);">;</span>
						</div>
					
						<div class="tag">Source</div>
						<div class="value">
							<svg aria-hidden="true" role="img" class="octicon octicon-mark-github" viewBox="0 0 16 16" width="14" height="14" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
							View source code
						</div>
					
						<div class="tag">Package</div>
						<div class="value">
							<svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" style="width: 14px; height: 14px;"><path d="M0 256V0h256v256z" fill="#C12127"></path><path d="M48 48h160v160h-32V80h-48v128H48z" fill="#FFF"></path></svg>
							@objekt/switch
						</div>
					</div>
				</main>
	
				<div class="shade" @click="${() => this._hideMenu()}"></div>
				
				<nav>aside</nav>
			</div>
		`;
	}
}