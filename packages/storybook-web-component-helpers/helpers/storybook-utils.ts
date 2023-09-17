import { ArgTypes, Args, getCustomElements } from "@storybook/web-components";

import { CustomElementManifest } from "./types/custom-element-manifest";

/**
 * Generate the default controls template for the component from the configured storybook custom elements manifest.
 * 
 * @param tagName The tag-name of the component to extract from the manifest.
 * @param overrides The story level overrides to apply to the default template.
 * 
 * @returns The component controls template.
 */
export const GenerateControlsFromManifest = (tagName: string, argTypes?: Partial<ArgTypes<Args>>): Partial<ArgTypes<Args>> => {

	// Extract the component custom element manifest details.
	const manifest: CustomElementManifest = getCustomElements() || [];

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