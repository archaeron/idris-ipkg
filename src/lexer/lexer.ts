import { Token } from './tokens'

const is = (s: string) => (inp: string) => inp === s

const equals = is('=')
const separator = is(',')

export const lex = (inp: string): Array<Token> => {
    let pos = 0
    let tokens: Token[] = []
    while (pos < inp.length) {
        pos += 1
    }
    return tokens
}
