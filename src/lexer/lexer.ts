import { Token } from './tokens'

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
                    tokenType: 'dot-sep-ident',
                    identifier: inp.slice(start, pos).split('.'),
                })
                break
            }
        }
    }
    return tokens
}
