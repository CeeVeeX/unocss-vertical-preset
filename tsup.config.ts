import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'tsup'

export function getVersion() {
  const packageJson = JSON.parse(readFileSync(join(__dirname, 'package.json'), 'utf-8'))
  return packageJson.version
}

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  splitting: false,
  sourcemap: true,
  target: 'es2020',
  clean: true,
  format: ['cjs', 'esm'],
  external: ['unocss'],
  dts: true,
  minify: true,
})
