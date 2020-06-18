import { UsefulToken, Package } from '../src/index'

export const withCommentsTokens: Array<UsefulToken> = [
    {
        identifier: 'package',
        tokenType: 'ident',
    },
    {
        identifier: 'idris2',
        tokenType: 'ident',
    },
    {
        identifier: 'modules',
        tokenType: 'ident',
    },
    {
        tokenType: 'equals',
    },
    {
        identifier: 'Algebra',
        tokenType: 'ident',
    },
    {
        tokenType: 'separator',
    },
    {
        identifier: 'Algebra.Preorder',
        tokenType: 'ident',
    },
    {
        tokenType: 'separator',
    },
    {
        identifier: 'Yaffle.REPL',
        tokenType: 'ident',
    },
    {
        identifier: 'depends',
        tokenType: 'ident',
    },
    {
        tokenType: 'equals',
    },
    {
        identifier: 'contrib',
        tokenType: 'ident',
    },
    {
        tokenType: 'separator',
    },
    {
        identifier: 'network',
        tokenType: 'ident',
    },
    {
        identifier: 'sourcedir',
        tokenType: 'ident',
    },
    {
        tokenType: 'equals',
    },
    {
        string: 'src',
        tokenType: 'string-lit',
    },
    {
        identifier: 'main',
        tokenType: 'ident',
    },
    {
        tokenType: 'equals',
    },
    {
        identifier: 'Idris.Main',
        tokenType: 'ident',
    },
    {
        identifier: 'executable',
        tokenType: 'ident',
    },
    {
        tokenType: 'equals',
    },
    {
        identifier: 'idris2',
        tokenType: 'ident',
    },
]

export const withCommentsPackage: Package = {
    name: 'idris2',
    fields: [
        {
            name: 'modules',
            values: [
                { fieldType: 'identifier', identifier: 'Algebra' },
                { fieldType: 'identifier', identifier: 'Algebra.Preorder' },
                { fieldType: 'identifier', identifier: 'Yaffle.REPL' },
            ],
        },
        {
            name: 'depends',
            values: [
                { fieldType: 'identifier', identifier: 'contrib' },
                { fieldType: 'identifier', identifier: 'network' },
            ],
        },
        {
            name: 'sourcedir',
            values: [
                {
                    fieldType: 'text',
                    text: 'src',
                },
            ],
        },
        {
            name: 'main',
            values: [
                {
                    fieldType: 'identifier',
                    identifier: 'Idris.Main',
                },
            ],
        },
        {
            name: 'executable',
            values: [
                {
                    fieldType: 'identifier',
                    identifier: 'idris2',
                },
            ],
        },
    ],
}
