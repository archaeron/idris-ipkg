import { describe, test, expect } from '@jest/globals'
import { readFile } from './read-file'
import { lex, toUsefulTokens, Package } from '../src/index'
import { idrisPackage } from './idris'
import { idris2ApiPackage } from './idris2api'
import { withCommentsPackage } from './with_comments'
import { parsePackage } from '../src/parser/parse'

function makeParserTest(file: string, shouldBePackage: Package) {
    test(file, () => {
        const ipkgContents = readFile(file)
        const tokens = lex(ipkgContents)
        const usefulTokens = toUsefulTokens(tokens)
        const parseResult = parsePackage(usefulTokens)
        if (parseResult.resultType === 'success') {
            expect(parseResult.value).toStrictEqual(shouldBePackage)
        } else {
            throw new Error(parseResult.message)
        }
    })
}

describe('parsing', () => {
    makeParserTest('./idris.ipkg', idrisPackage)
    makeParserTest('./idris2api.ipkg', idris2ApiPackage)
    makeParserTest('./with_comments.ipkg', withCommentsPackage)
})
