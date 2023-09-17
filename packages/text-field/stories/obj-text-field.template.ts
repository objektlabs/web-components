

import { ArgTypes, Args, Parameters, StoryObj, getCustomElements } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { GenerateControlsFromManifest } from '@objekt/storybook-web-component-helpers';

import '../components/obj-text-field';

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