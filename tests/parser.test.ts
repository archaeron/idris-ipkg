import { describe, test, expect } from '@jest/globals'
import { readFile } from './read-file'
import { lex, toUsefulTokens, Package, PkgDesc } from '../src/index'
import { idrisPackage, idrisPackageDescription } from './idris'
import { idris2ApiPackage, idris2ApiPackageDescription } from './idris2api'
import {
    withCommentsPackage,
    withCommentsPackageDescription,
} from './with_comments'
import { parsePackage, pkgDescFromPackage } from '../src/parser/parse'

function makeParserTest(
    file: string,
    shouldBePackage: Package,
    shouldBePkgDesc: PkgDesc,
) {
    test(file, () => {
        const ipkgContents = readFile(file)
        const tokens = lex(ipkgContents)
        const usefulTokens = toUsefulTokens(tokens)
        const parseResult = parsePackage(usefulTokens)
        if (parseResult.resultType === 'success') {
            expect(parseResult.value).toStrictEqual(shouldBePackage)
            const packageDescription = pkgDescFromPackage(parseResult.value)
            if (packageDescription.resultType === 'success') {
                expect(packageDescription.value).toStrictEqual(shouldBePkgDesc)
            } else {
                throw new Error(
                    'the package descripttion should have been valid',
                )
            }
        } else {
            throw new Error(parseResult.message)
        }
    })
}

describe('parsing', () => {
    makeParserTest('./idris.ipkg', idrisPackage, idrisPackageDescription)
    makeParserTest(
        './idris2api.ipkg',
        idris2ApiPackage,
        idris2ApiPackageDescription,
    )
    makeParserTest(
        './with_comments.ipkg',
        withCommentsPackage,
        withCommentsPackageDescription,
    )
})
