import { describe, test, expect } from '@jest/globals'
import { readFile } from './read-file'
import { lex, lexFull, tokensToString } from '../src/index'
import { withCommentsTokens } from './with_comments'
import { idris2ApiTokens } from './idris2api'
import { idrisTokens } from './idris'

describe('full lexing', () => {
    test('idris.ipkg', () => {
        const ipkgContents = readFile('./idris.ipkg')
        const lexemes = lexFull(ipkgContents)
        expect(tokensToString(lexemes)).toStrictEqual(ipkgContents)
    })

    test('idris2api.ipkg', () => {
        const ipkgContents = readFile('./idris2api.ipkg')
        const lexemes = lexFull(ipkgContents)
        expect(tokensToString(lexemes)).toStrictEqual(ipkgContents)
    })

    test('with_comments.ipkg', () => {
        const ipkgContents = readFile('./with_comments.ipkg')
        const lexemes = lexFull(ipkgContents)
        expect(tokensToString(lexemes)).toStrictEqual(ipkgContents)
    })
})

describe('lexing', () => {
    test('idris.ipkg', () => {
        const ipkgContents = readFile('./idris.ipkg')
        const lexemes = lex(ipkgContents)
        expect(lexemes).toStrictEqual(idrisTokens)
    })

    test('idris2api.ipkg', () => {
        const ipkgContents = readFile('./idris2api.ipkg')
        const lexemes = lex(ipkgContents)
        expect(lexemes).toStrictEqual(idris2ApiTokens)
    })

    test('with_comments.ipkg', () => {
        const ipkgContents = readFile('./with_comments.ipkg')
        const lexemes = lex(ipkgContents)
        expect(lexemes).toStrictEqual(withCommentsTokens)
    })
})
