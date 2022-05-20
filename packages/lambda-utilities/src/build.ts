import esbuild from 'esbuild'
import type { build as buildDeclaration } from 'esbuild'

/**
 * Default configuration for ESBuild to properly output ESM friendly lambda bundles
 */
export async function build(options: esbuild.BuildOptions) {
  return await esbuild.build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    platform: 'node',
    target: ['node14.19.1', 'esnext'],
    sourcemap: true,
    outdir: 'dist',
    minify: true,
    format: 'esm',
    ...options,
  })
}
