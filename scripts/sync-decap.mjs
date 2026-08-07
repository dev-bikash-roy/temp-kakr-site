/**
 * Copies the Decap CMS browser bundle from node_modules into public/admin/vendor/.
 *
 * Decap is normally loaded from a public CDN. It is self-hosted here because the
 * editor holds a live GitHub token in the browser: a compromised or swapped CDN
 * bundle on that page would be a repository-credential compromise, not just a
 * defaced admin screen. Serving it from KAKR's own origin means the bundle is
 * pinned by package-lock.json and reviewed like any other dependency.
 *
 * Runs from `postinstall` and `build`. Output is gitignored — it is a build
 * artefact, reproducible from the lockfile.
 *
 * Run standalone with: node scripts/sync-decap.mjs
 */

import { cp, mkdir, readdir, rm, stat } from 'node:fs/promises'
import { join } from 'node:path'

const SOURCE = join(process.cwd(), 'node_modules', 'decap-cms', 'dist')
const TARGET = join(process.cwd(), 'public', 'admin', 'vendor')

/**
 * The package ships every chunk twice: `<id>.decap-cms.js` and a legacy
 * `<id>.cms.js` alias. Only the first set is referenced by the `decap-cms.js`
 * entry point, so copying both would double what we serve for nothing.
 */
function isNeeded(name) {
  if (name.endsWith('.map')) return false
  return name === 'decap-cms.js' || name.endsWith('.decap-cms.js') || name.endsWith('.LICENSE.txt')
}

async function main() {
  try {
    await stat(SOURCE)
  } catch {
    console.error('decap-cms is not installed. Run `npm install` — /admin cannot load its editor without it.')
    process.exit(1)
  }

  // Rebuild the directory so a version bump cannot leave orphaned chunks behind
  // that the new entry point would never load.
  await rm(TARGET, { recursive: true, force: true })
  await mkdir(TARGET, { recursive: true })

  const entries = await readdir(SOURCE, { withFileTypes: true })
  let copied = 0
  let bytes = 0

  for (const entry of entries) {
    if (!entry.isFile()) continue
    if (!isNeeded(entry.name)) continue

    await cp(join(SOURCE, entry.name), join(TARGET, entry.name))
    bytes += (await stat(join(SOURCE, entry.name))).size
    copied++
  }

  if (!copied) {
    console.error('No Decap bundle files matched. The decap-cms dist layout may have changed.')
    process.exit(1)
  }

  console.log(`Decap CMS: copied ${copied} file(s), ${(bytes / 1024 / 1024).toFixed(1)} MB to public/admin/vendor/`)
}

await main()
