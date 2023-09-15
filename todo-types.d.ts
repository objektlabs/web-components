
export type CSSPart = {
	description: string,
	name: string
}

export type CSSProperty = {
	description: string,
	name: string
}

export type CEM_Event = {
	description: string,
	name: string,
	type: {
		text: string
	}
}

export type CustomElementManifest = {
	modules: {
		declarations: {
			attributes: {
				description: string,
				fieldName: string,
				name: string,
				type: {
					text: string
				}
			}[],
			cssParts?: CSSPart[],
			cssProperties?: CSSProperty[],
			customElement: boolean,
			description: string,
			events: CEM_Event[],
			kind: 'class',
			members: {
				attribute: string,
				description: string,
				kind: 'field' | 'method',
				name: string,
				parameters?: {

				}[],
				privacy?: "private",
				reflects?: boolean,
				return?: {
					type: {
						text: string
					}
				}
				type?: {
					text: string
				}
			}[],
			name: string,
			superclass: {
				name: string,
				package: string
			},
			tagName: string
		}[],
		exports: {
			declaration: {
				module: string,
				name: string,
			},
			kind: 'js' | 'custom-element-definition',
			name: string
		}[],
		kind: 'javascript-module'
		path: string
	}[];

	readme: string,

	schemaVersion: string
}