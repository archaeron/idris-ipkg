export type CommentToken = {
    tokenType: 'comment'
    comment: string
}
export type EqualsToken = { tokenType: 'equals' }
export type DotSepIdentToken = {
    tokenType: 'dot-sep-ident'
    identifier: Array<string>
}
export type SeparatorToken = { tokenType: 'separator' }
export type SpaceToken = { tokenType: 'space' }
export type NewLineToken = { tokenType: 'new-line' }
export type StringLitToken = {
    tokenType: 'string-lit'
    string: string
}

export type Token =
    | CommentToken
    | EqualsToken
    | DotSepIdentToken
    | SeparatorToken
    | SpaceToken
    | NewLineToken
    | StringLitToken
