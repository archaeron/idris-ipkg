import { UsefulToken } from '../lexer/tokens'
import { TextField, IdentifierField, FieldValues, Field, Package } from './ipkg'
import { tokensToString } from '../lexer/to-string'

export type ParseSuccess<T> = { resultType: 'success'; value: T }
export type ParseError = { resultType: 'error'; message: string }
export type ParseResult<T> = ParseSuccess<T> | ParseError

/**
 * Parse the head of the package file.
 *
 * E.g.: `package packageName`
 */
function parsePackageName(
    tokens: Array<UsefulToken>,
    pos: number,
): ParseResult<{ name: string; newPos: number }> {
    const packageIdent = tokens[pos]
    const packageName = tokens[pos + 1]
    if (
        packageIdent &&
        packageIdent.tokenType === 'ident' &&
        packageIdent.identifier === 'package' &&
        packageName &&
        packageName.tokenType === 'ident'
    ) {
        return {
            resultType: 'success',
            value: { name: packageName.identifier, newPos: pos + 2 },
        }
    } else {
        return {
            resultType: 'error',
            message:
                'The ipkg file needs to start with a package description. E.g.: `package packageName`',
        }
    }
}

/**
 * Return the proper field value from a token.
 * Return `null` if it's not a valid token.
 */
function tokenValueToFieldValue(
    token: UsefulToken,
): TextField | IdentifierField | null {
    switch (token.tokenType) {
        case 'ident': {
            return { fieldType: 'identifier', identifier: token.identifier }
        }
        case 'string-lit': {
            return { fieldType: 'text', text: token.string }
        }
        default: {
            return null
        }
    }
}

/**
 * Parse a field value. The thing(s) after the "=".
 * Note: `pos` should point to the token right after the equal sign.
 * raw text: authors = Idris, Elba
 * -> input tokens: "authors", "=", "Idris", ",", "Elba", position: 2
 * -> result:
 * [
 *   { fieldType: 'identifier', identifier: "Idris"},
 *   { fieldType: 'identifier', identifier: "Elba"}
 * ]
 */
function parseFieldValues(
    tokens: Array<UsefulToken>,
    pos: number,
): ParseResult<{ fieldValues: FieldValues; newPos: number }> {
    const fieldValues: FieldValues = []
    let newPos = pos
    while (tokens[newPos]) {
        const token = tokens[newPos]
        const value = tokenValueToFieldValue(token)
        if (value === null) {
            return {
                resultType: 'error',
                message: `invalid value after the "=": ${tokensToString([
                    token,
                ])}`,
            }
        } else {
            fieldValues.push(value)
        }
        if (
            !(tokens[newPos + 1] && tokens[newPos + 1].tokenType == 'separator')
        ) {
            newPos += 1
            break
        }
        newPos += 2
    }

    // convert the parsed values to the correct `FieldValue`.
    if (fieldValues.length === 0) {
        return {
            resultType: 'error',
            message: 'expected at least one value after "="',
        }
    } else {
        return {
            resultType: 'success',
            value: {
                fieldValues,
                newPos,
            },
        }
    }
}

/**
 * Parse a field of the iPKG file.
 *
 * E.g: `main = Idris.Main`
 * -> { name: "main", value: { fieldType: "identifier", identifier: "Idris.Main" }
 */
function parseField(
    tokens: Array<UsefulToken>,
    pos: number,
): ParseResult<{ field: Field; newPos: number }> {
    var newPos = pos
    let ident = tokens[newPos]
    let equals = tokens[newPos + 1]
    newPos += 2

    if (
        ident &&
        ident.tokenType === 'ident' &&
        equals &&
        equals.tokenType === 'equals'
    ) {
        const fieldValueResult = parseFieldValues(tokens, newPos)
        if (fieldValueResult.resultType === 'success') {
            const { newPos, fieldValues } = fieldValueResult.value
            const field: Field = { name: ident.identifier, values: fieldValues }
            return {
                resultType: 'success',
                value: {
                    field,
                    newPos,
                },
            }
        } else {
            return {
                resultType: 'error',
                message: `Couldn't parse the field value for ${ident.identifier}. Error: ${fieldValueResult.message}`,
            }
        }
    } else {
        return {
            resultType: 'error',
            message: `Expected an identifier followed by "=", but got: ${tokensToString(
                [ident, equals],
            )}`,
        }
    }
}

/**
 * Parse the tokens of an ipkg file into a map of "name -> field".
 *
 * An ipkg file is expected to at least contain the package name as the first
 * entry in the file:
 * E.g.: `package idris2`
 *
 * The file can then contain zero or more fields (fieldName = fieldValues):
 * ```
 * depends = contrib, network
 * sourcedir = "src"
 * main = Idris.Main
 * ```
 */
export function parsePackage(tokens: Array<UsefulToken>): ParseResult<Package> {
    const tokensLength = tokens.length
    let pos = 0
    const packageNameResult = parsePackageName(tokens, pos)
    let fields: Array<Field> = []
    if (packageNameResult.resultType === 'success') {
        const { name, newPos } = packageNameResult.value
        pos = newPos
        while (pos < tokensLength) {
            const parsedValue = parseField(tokens, pos)
            if (parsedValue.resultType === 'success') {
                const { field, newPos } = parsedValue.value
                fields.push(field)
                pos = newPos
            } else {
                return parsedValue
            }
        }

        return {
            resultType: 'success',
            value: { name, fields },
        }
    } else {
        return packageNameResult
    }
}
