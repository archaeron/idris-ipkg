import { lex, toUsefulTokens } from './lexer/lexer'
import { PkgDesc } from './parser/ipkg'
import { parsePackage, pkgDescFromPackage, ParseResult } from './parser/parse'

/**
 * Parse the contents of an iPKG file into a `PkgDesc`.
 */
export function parseIpkgFile(ipkgContents: string): ParseResult<PkgDesc> {
    const tokens = lex(ipkgContents)
    const usefulTokens = toUsefulTokens(tokens)
    const parseResult = parsePackage(usefulTokens)
    if (parseResult.resultType === 'error') {
        return parseResult
    }
    return pkgDescFromPackage(parseResult.value)
}
