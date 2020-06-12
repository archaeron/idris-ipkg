import { describe, test, expect } from '@jest/globals'
import { readFile } from './read-file'
// import { lex } from '../src/index'

describe('idris.ipkg', () => {
    const ipkgContents = readFile('./idris.ipkg')
    console.log(ipkgContents)

    test('lex', () => {
        expect(5).toStrictEqual(5)
    })
})
