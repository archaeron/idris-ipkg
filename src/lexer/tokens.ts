export type CommentToken = {
    tokenType: 'comment'
    comment: string
}
export type EndOfInputToken = { tokenType: 'end-of-input' }
export type EqualsToken = { tokenType: 'equals' }
export type DotSepIdentToken = {
    tokenType: 'dot-sep-ident'
    identifiers: Array<string>
}
export type SeparatorToken = { tokenType: 'separator' }
export type SpaceToken = { tokenType: 'space' }
export type StringLitToken = {
    tokenType: 'string-lit'
    string: string
}

export type Token =
    | CommentToken
    | EndOfInputToken
    | EqualsToken
    | DotSepIdentToken
    | SeparatorToken
    | SpaceToken
    | StringLitToken
