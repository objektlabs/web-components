

import { ArgTypes, Args, Parameters, StoryObj, getCustomElements } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import '../components/obj-text-field';

/**
 * Generate the default controls template for the component from the configured storybook custom elements manifest.
 * 
 * @param overrides The story level overrides to apply to the default template.
 * 
 * @returns The component controls template.
 */
export const GenerateControlsFromManifest = (tagName: string, argTypes?: Partial<ArgTypes<Args>>): Partial<ArgTypes<Args>> => {

	// Extract the component custom element manifest details.
	const manifest = getCustomElements() || [];

	let cssParts: any[] = [];
	let cssProperties: any[] = [];
	let events: any[] = [];

	for (const component of manifest.modules) {

		for (const item of component.declarations) {

			if (item.tagName === tagName) {

				cssParts = item.cssParts || [];
				cssProperties = item.cssProperties || [];
				events = item.events || [];
			}
		}
	}

	// Build up the basic controls list from the custom element manifest data.
	return {

		// Remove CSS shadow parts from the controls list.
		...Object.fromEntries(
			cssParts.map(e => [e.name, {
				control: { type: 'none' },
				// if: { arg: 'NONE', eq: 0 }
			}])
		),

		// Remove CSS properties parts from the controls list.
		...Object.fromEntries(
			cssProperties.map(e => [e.name, {
				control: { type: 'none' },
				// if: { arg: 'NONE', eq: 0 }
			}])
		),

		// Remove events from the controls list.
		...Object.fromEntries(
			events.map(e => [e.name, {
				control: { type: 'none' },
				// if: { arg: 'NONE', eq: 0 }
			}])
		),

		// Include override controls.
		...argTypes
	};
}

/**
 * Generate the default controls template for the component.
 * 
 * @param overrides The story level overrides to apply to the default template.
 * 
 * @returns The component controls template.
 */
export const Controls = (argTypes?: Partial<ArgTypes<Args>>): Partial<ArgTypes<Args>> => {

	if (!argTypes) {
		argTypes = {};
	}

	return GenerateControlsFromManifest('obj-text-field', {
		type: {
			control: { type: 'radio' },
			options: ['stack', 'inline', 'outline', 'filled', 'clear']
		},
		...argTypes
	});
}

/**
 * Generate the default parameters template for the component.
 * 
 * @param overrides The story level overrides to apply to the default template.
 * 
 * @returns The component parameters template.
 */
export const Params = (parameters?: Parameters): Parameters => {

	if (!parameters) {
		parameters = {};
	}

	return {
		docs: {
			canvas: {
				sourceState: 'shown'
			}
		},
		...parameters
	};
}

/**
 * Generate the default story template for the component.
 * 
 * @param overrides The story level overrides to apply to the default template.
 * 
 * @returns The component story template.
 */
export const Story = (story?: StoryObj): StoryObj => {

	if (!story) {
		story = {};
	}

	return {
		...story,
		args: {
			type: 'inline',
			label: 'Hello World',
			...story.args
		},
		render: args => html`
			<obj-text-field
				type="${ifDefined(args.type)}"
				label="${ifDefined(args.label)}"
				value="${ifDefined(args.value)}"
				placeholder="${ifDefined(args.placeholder)}"
				message="${ifDefined(args.message)}"
				?error="${args.error}"
				?disabled="${args.disabled}"
				?invert="${args.invert}"
				@value-changed="${action('value-changed')}"
			></obj-text-field>
		`
	};
}