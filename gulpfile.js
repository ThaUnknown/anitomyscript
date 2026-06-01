import gulp from 'gulp'
import { spawn } from 'child_process'
import path from 'path'
import { baseFlags, releaseFlags, debugFlags, includeDirs, sources, outputFile } from './build-config.mjs'

function getEmcc () {
  const emscriptenPath = process.env.EMSCRIPTEN || process.env.EMSCRIPTEN_ROOT
  const emcc = process.platform === 'win32' ? 'emcc.bat' : 'emcc'
  if (emscriptenPath) {
    return path.join(emscriptenPath, emcc)
  }
  return emcc
}

function build (cb) {
  const isRelease = process.env.NODE_ENV === 'prod'
  const includeArgs = includeDirs.flatMap(d => ['-I', d])

  const spawnArgs = [
    ...baseFlags,
    ...(isRelease ? releaseFlags : debugFlags),
    ...includeArgs,
    ...sources,
    '-o', outputFile,
  ]

  console.log(`Starting ${isRelease ? 'release' : 'debug'} build`)
  const emcc = getEmcc()
  const s = spawn(emcc, spawnArgs)

  s.stdout.on('data', (data) => {
    console.log(data.toString())
  })

  s.stderr.on('data', (data) => {
    console.log(data.toString())
  })

  s.on('error', (e) => cb(e))
  s.on('close', () => cb())
}

gulp.task('default', build)
