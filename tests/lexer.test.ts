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

    test("shouldn't crash and should terminate on a non-ipkg file", () => {
        const ipkgContents = readFile('./Algebra.idr')
        const tokens = lex(ipkgContents)
        expect(tokens).toBeInstanceOf(Array)
        expect(tokens.length).toBeGreaterThan(0)
    })

    test('should terminate on unbalanced quotes', () => {
        const ipkgContents = readFile('./unbalanced_quotes.ipkg')
        const tokens = lex(ipkgContents)
        expect(tokens).toBeInstanceOf(Array)
        expect(tokens.length).toBeGreaterThan(0)
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

    test("shouldn't crash and should terminate on a non-ipkg file", () => {
        const ipkgContents = readFile('./Algebra.idr')
        const tokens = lex(ipkgContents)
        const usefulTokens = toUsefulTokens(tokens)
        expect(usefulTokens).toBeInstanceOf(Array)
        expect(usefulTokens.length).toBeGreaterThan(0)
    })

    test('invalid values', () => {
        const ipkgContents = readFile('./invalid_values.ipkg')
        const tokens = lex(ipkgContents)
        const usefulTokens = toUsefulTokens(tokens)
        expect(usefulTokens).toBeInstanceOf(Array)
        expect(usefulTokens.length).toBeGreaterThan(0)
    })
})
