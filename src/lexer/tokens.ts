export type CommentToken = {
    tokenType: 'comment'
    comment: string
}
export type EqualsToken = { tokenType: 'equals' }
export type IdentToken = {
    tokenType: 'ident'
    identifier: string
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
    | IdentToken
    | SeparatorToken
    | SpaceToken
    | NewLineToken
    | StringLitToken
