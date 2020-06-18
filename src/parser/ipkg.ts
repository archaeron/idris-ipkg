export type TextField = { fieldType: 'text'; text: string }
export type IdentifierField = { fieldType: 'identifier'; identifier: string }
export type FieldValues = Array<TextField | IdentifierField>
export type Field = { name: string; values: FieldValues }
export type Package = { name: string; fields: Array<Field> }

export type PkgDesc = {
    name: string
    version?: string
    authors?: string
    maintainers?: string
    license?: string
    brief?: string
    readme?: string
    homepage?: string
    sourceloc?: string
    bugtracker?: string
    /**
     * packages to add to search path
     */
    depends: Array<string>
    /**
     * modules to install (namespace, filename)
     */
    modules: Array<string>
    /**
     * main file (i.e. file to load at REPL)
     */
    main?: string
    /**
     * name of executable
     */
    executable?: string
    // options : Maybe (FC, string)
    sourcedir?: string
    // prebuild : Maybe (FC, string) -- Script to run before building
    // postbuild : Maybe (FC, string) -- Script to run after building
    // preinstall : Maybe (FC, string) -- Script to run after building, before installing
    // postinstall : Maybe (FC, string) -- Script to run after installing
    // preclean : Maybe (FC, string) -- Script to run before cleaning
    // postclean : Maybe (FC, string) -- Script to run after cleaning
}
