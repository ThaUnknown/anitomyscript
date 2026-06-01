import { spawn } from 'node:child_process'
import { baseFlags, releaseFlags, includeDirs, sources, outputFile } from './build-config.mjs'

const includeArgs = includeDirs.flatMap(d => ['-I', d])

const spawnArgs = [
  ...baseFlags,
  ...releaseFlags,
  ...includeArgs,
  ...sources,
  '-o', outputFile,
]

const emcc = process.platform === 'win32' ? 'emcc.bat' : 'emcc'

console.log('Starting Docker build with:', spawnArgs.join(' '))
const s = spawn(emcc, spawnArgs, { stdio: 'inherit' })

s.on('error', (e) => {
  console.error('Failed to start emcc:', e)
  process.exit(1)
})

s.on('close', (code) => {
  process.exit(code ?? 0)
})
