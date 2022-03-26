import { html, css, LitElement, CSSResultGroup, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('demo-component')
export class DemoComponent extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--demo-component-text-color, #000);
    }
  `;

  @property({ type: String }) override title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  override render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increments</button>
    `;
  }
}
