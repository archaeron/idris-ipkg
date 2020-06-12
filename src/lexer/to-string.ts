import { Token } from './tokens'

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
            case 'dot-sep-ident': {
                s += token.identifier.join('.')
                break
            }
        }
    }
    return s
}
