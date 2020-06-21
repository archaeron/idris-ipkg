export type TextField = { fieldType: 'text'; text: string }
export type IdentifierField = { fieldType: 'identifier'; identifier: string }
export type FieldValues = Array<TextField | IdentifierField>
export type Field = { name: string; values: FieldValues }
export type Package = { name: string; fields: Array<Field> }
