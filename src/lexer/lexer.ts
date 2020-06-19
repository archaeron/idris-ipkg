import { Token, UsefulToken } from './tokens'

/**
 * Lex the input string into an array of tokens that
 * can be printed out to the original again.
 * If you only want the useful tokens, use the `lex` function.
 */
export const lex = (inp: string): Array<Token> => {
    let pos = 0
    let tokens: Token[] = []
    const inpLength = inp.length
    while (pos < inpLength) {
        const char = inp[pos]
        switch (char) {
            case '=': {
                tokens.push({ tokenType: 'equals' })
                pos += 1
                break
            }
            case '-': {
                const start = pos
                const nextChar = inp[pos + 1]
                if (nextChar === '-') {
                    pos += 1
                    while (inp[pos] !== '\n') {
                        pos += 1
                    }
                    tokens.push({
                        tokenType: 'comment',
                        comment: inp.slice(start, pos),
                    })
                } else {
                    pos += 1
                }
                break
            }
            case ',': {
                tokens.push({ tokenType: 'separator' })
                pos += 1
                break
            }
            case ' ': {
                tokens.push({ tokenType: 'space' })
                pos += 1
                break
            }
            case '\n': {
                tokens.push({ tokenType: 'new-line' })
                pos += 1
                break
            }
            case '"': {
                pos += 1 // skip the opening quotes
                const start = pos
                // FIX ME!
                while (
                    !(inp[pos] === '"' && inp[pos - 1] !== '\\') &&
                    pos < inpLength
                ) {
                    pos += 1
                }
                tokens.push({
                    tokenType: 'string-lit',
                    string: inp.slice(start, pos),
                })
                pos += 1 // skip the closing quotes
                break
            }
            default: {
                const start = pos
                while (
                    inp[pos] !== ' ' &&
                    inp[pos] !== ',' &&
                    inp[pos] !== '\n' &&
                    inp[pos] !== '"' &&
                    pos < inpLength
                ) {
                    pos += 1
                }
                tokens.push({
                    tokenType: 'ident',
                    identifier: inp.slice(start, pos),
                })
                break
            }
        }
    }
    return tokens
}

/**
 * Lex the input but only keep the useful tokens.
 */
export const toUsefulTokens = (tokens: Array<Token>): Array<UsefulToken> => {
    var usefulTokens: Array<UsefulToken> = []
    for (const token of tokens) {
        switch (token.tokenType) {
            case 'equals':
            case 'ident':
            case 'separator':
            case 'string-lit': {
                usefulTokens.push(token)
                continue
            }
            default: {
                continue
            }
        }
    }
    return usefulTokens
}
