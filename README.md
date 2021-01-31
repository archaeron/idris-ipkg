# Idris-IPKG

No runtime dependencies TypeScript Idris-iPKG file reader.

## Usage

```typescript
import { parseIpkgFile } from 'idris-ipkg'
const ipkgContents = readFile(file)
const pkgDescResult = parseIpkgFile
if (packageDescription.resultType === 'success') {
    console.log('success', packageDescription.value)
} else {
    console.log('error', packageDescription.message)
}
```
