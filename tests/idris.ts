import { UsefulToken, Package, PkgDesc } from '../src/index'

export const idrisTokens: Array<UsefulToken> = [
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
        identifier: 'Algebra.Semiring',
        tokenType: 'ident',
    },
    {
        tokenType: 'separator',
    },
    {
        identifier: 'Algebra.ZeroOneOmega',
        tokenType: 'ident',
    },
    {
        tokenType: 'separator',
    },
    {
        identifier: 'Compiler.ANF',
        tokenType: 'ident',
    },
    {
        tokenType: 'separator',
    },
    {
        identifier: 'Compiler.VMCode',
        tokenType: 'ident',
    },
    {
        tokenType: 'separator',
    },
    {
        identifier: 'Utils.Shunting',
        tokenType: 'ident',
    },
    {
        tokenType: 'separator',
    },
    {
        identifier: 'Utils.String',
        tokenType: 'ident',
    },
    {
        tokenType: 'separator',
    },
    {
        identifier: 'Utils.Path',
        tokenType: 'ident',
    },
    {
        tokenType: 'separator',
    },
    {
        identifier: 'Yaffle.Main',
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

export const idrisPackage: Package = {
    name: 'idris2',
    fields: [
        {
            name: 'modules',
            values: [
                { fieldType: 'identifier', identifier: 'Algebra' },
                { fieldType: 'identifier', identifier: 'Algebra.Preorder' },
                { fieldType: 'identifier', identifier: 'Algebra.Semiring' },
                {
                    fieldType: 'identifier',
                    identifier: 'Algebra.ZeroOneOmega',
                },
                { fieldType: 'identifier', identifier: 'Compiler.ANF' },
                { fieldType: 'identifier', identifier: 'Compiler.VMCode' },
                { fieldType: 'identifier', identifier: 'Utils.Shunting' },
                { fieldType: 'identifier', identifier: 'Utils.String' },
                { fieldType: 'identifier', identifier: 'Utils.Path' },
                { fieldType: 'identifier', identifier: 'Yaffle.Main' },
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

export const idrisPackageDescription: PkgDesc = {
    name: 'idris2',
    version: undefined,
    authors: undefined,
    maintainers: undefined,
    license: undefined,
    brief: undefined,
    readme: undefined,
    homepage: undefined,
    sourceloc: undefined,
    bugtracker: undefined,
    depends: ['contrib', 'network'],
    modules: [
        'Algebra',
        'Algebra.Preorder',
        'Algebra.Semiring',
        'Algebra.ZeroOneOmega',
        'Compiler.ANF',
        'Compiler.VMCode',
        'Utils.Shunting',
        'Utils.String',
        'Utils.Path',
        'Yaffle.Main',
        'Yaffle.REPL',
    ],
    main: 'Idris.Main',
    executable: 'idris2',
    sourcedir: 'src',
}
