import { html, TemplateResult } from 'lit';

import '../components/obj-button';

// Setup the story block.
export default {
	title: 'Buttons/Button',
	component: 'obj-button'
};

// Create a rendering template for the component.
interface Story<T> {
	(args: T): TemplateResult;
	args?: Partial<T>;
	argTypes?: Record<string, unknown>;
	parameters?: any;
}

interface ArgTypes {
	type?: string;
	label?: string;
	invert?: boolean;
	disabled?: boolean;
	slot?: TemplateResult;
}

const Template: Story<ArgTypes> = (args: ArgTypes) => html`
	<obj-button
		.type="${args.type}"
		.label="${args.label}"
		?invert="${args.invert}"
		?disabled="${args.disabled}">
		${args.slot}
	</obj-button>
`;

// Define Story - Default
export const Default = Template.bind({});
Default.args = {
	label: 'Hello World 5'
}

// Define Story - Primary
export const Primary = Template.bind({});
Primary.args = {
	type: 'primary',
	label: 'Hello World'
};

// Define Story - Primary Disabled
export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
	type: 'primary',
	label: 'Hello World',
	disabled: true
};

// Define Story - Primary Invert
export const PrimaryInvert = Template.bind({});
PrimaryInvert.args = {
	type: 'primary',
	label: 'Hello World',
	invert: true
};
PrimaryInvert.parameters = {
	backgrounds: { default: 'dark' }
};

// Define Story - Primary Invert Disabled
export const PrimaryInvertDisabled = Template.bind({});
PrimaryInvertDisabled.args = {
	type: 'primary',
	label: 'Hello World',
	invert: true,
	disabled: true
};
PrimaryInvertDisabled.parameters = {
	backgrounds: { default: 'dark' }
};

// Define Story - Secondary
export const Secondary = Template.bind({});
Secondary.args = {
	type: 'secondary',
	label: 'Hello World'
};

// Define Story - Secondary Disabled
export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
	type: 'secondary',
	label: 'Hello World',
	disabled: true
};

// Define Story - Secondary Invert
export const SecondaryInvert = Template.bind({});
SecondaryInvert.args = {
	type: 'secondary',
	label: 'Hello World',
	invert: true
};
SecondaryInvert.parameters = {
	backgrounds: { default: 'dark' }
};

// Define Story - Secondary Invert Disabled
export const SecondaryInvertDisabled = Template.bind({});
SecondaryInvertDisabled.args = {
	type: 'secondary',
	label: 'Hello World',
	invert: true,
	disabled: true
};
SecondaryInvertDisabled.parameters = {
	backgrounds: { default: 'dark' }
};