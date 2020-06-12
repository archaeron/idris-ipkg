import fs from 'fs'
import path from 'path'

export function readFile(relPath: string): string {
    return fs.readFileSync(path.join(__dirname, relPath), { encoding: 'utf8' })
}
