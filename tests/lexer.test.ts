import { describe, test, expect } from '@jest/globals'
import { readFile } from './read-file'
import { lex, toUsefulTokens, tokensToString } from '../src/index'
import { withCommentsTokens } from './with_comments'
import { idris2ApiTokens } from './idris2api'
import { idrisTokens } from './idris'

describe('full lexing', () => {
    test('idris.ipkg', () => {
        const ipkgContents = readFile('./idris.ipkg')
        const tokens = lex(ipkgContents)
        expect(tokensToString(tokens)).toStrictEqual(ipkgContents)
    })

    test('idris2api.ipkg', () => {
        const ipkgContents = readFile('./idris2api.ipkg')
        const tokens = lex(ipkgContents)
        expect(tokensToString(tokens)).toStrictEqual(ipkgContents)
    })

    test('with_comments.ipkg', () => {
        const ipkgContents = readFile('./with_comments.ipkg')
        const tokens = lex(ipkgContents)
        expect(tokensToString(tokens)).toStrictEqual(ipkgContents)
    })
})

describe('lexing', () => {
    test('idris.ipkg', () => {
        const ipkgContents = readFile('./idris.ipkg')
        const tokens = lex(ipkgContents)
        const usefulTokens = toUsefulTokens(tokens)
        expect(usefulTokens).toStrictEqual(idrisTokens)
    })

    test('idris2api.ipkg', () => {
        const ipkgContents = readFile('./idris2api.ipkg')
        const tokens = lex(ipkgContents)
        const usefulTokens = toUsefulTokens(tokens)
        expect(usefulTokens).toStrictEqual(idris2ApiTokens)
    })

    test('with_comments.ipkg', () => {
        const ipkgContents = readFile('./with_comments.ipkg')
        const tokens = lex(ipkgContents)
        const usefulTokens = toUsefulTokens(tokens)
        expect(usefulTokens).toStrictEqual(withCommentsTokens)
    })
})
