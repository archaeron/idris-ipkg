import { Token } from './tokens'

/**
 * Convert an array of tokens back to the original input.
 */
export function tokensToString(tokens: Array<Token>) {
    let s = ''
    for (const token of tokens) {
        switch (token.tokenType) {
            case 'space': {
                s += ' '
                break
            }
            case 'new-line': {
                s += '\n'
                break
            }
            case 'equals': {
                s += '='
                break
            }
            case 'separator': {
                s += ','
                break
            }
            case 'comment': {
                s += token.comment
                break
            }
            case 'string-lit': {
                s += `"${token.string}"`
                break
            }
            case 'ident': {
                s += token.identifier
                break
            }
        }
    }
    return s
}
