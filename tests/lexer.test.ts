import { describe, test, expect } from '@jest/globals'
import { readFile } from './read-file'
import { lex, tokensToString } from '../src/index'

describe('lesing', () => {
    test('idris.ipkg', () => {
        const ipkgContents = readFile('./idris.ipkg')
        const lexemes = lex(ipkgContents)
        expect(tokensToString(lexemes)).toStrictEqual(ipkgContents)
    })

    test('idris2api.ipkg', () => {
        const ipkgContents = readFile('./idris2api.ipkg')
        const lexemes = lex(ipkgContents)
        expect(tokensToString(lexemes)).toStrictEqual(ipkgContents)
    })
})
