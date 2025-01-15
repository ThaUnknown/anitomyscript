import gulp from 'gulp'
import { spawn } from 'child_process'
import path from 'path'
import fs from 'fs'

function build (cb) {
  const emscriptenPath = process.env.EMSCRIPTEN || process.env.EMSCRIPTEN_ROOT

  if (!emscriptenPath || !fs.existsSync(path.resolve(emscriptenPath))) {
    return cb('Unable to find emscripten root. Use the env variable EMSCRIPTEN or EMSCRIPTEN_ROOT to set it manually.')
  }

  const out = path.resolve('./', 'dist', 'anitomyscript.js')
  const isRelease = process.env.NODE_ENV === 'prod'

  let spawnArgs = [
    '-std=c++23',
    // '-fPIC', '-fno-exceptions', '-Wall', '-Wextra', '-Wpedantic', '-Werror',
    '-v',
    '-I', path.resolve('./include/include'),
    '-s', 'EXPORT_NAME="anitomyscript"',
    '-s', 'WASM=1',
    '-s', 'ENVIRONMENT=web,node',
    '-s', 'FILESYSTEM=0',
    '-s', 'MODULARIZE=1',
    '-s', 'EXPORT_ES6=1',
    '-s', 'AUTO_JS_LIBRARIES=0',
    '-s', 'AUTO_NATIVE_LIBRARIES=0',
    '-s', 'HTML5_SUPPORT_DEFERRING_USER_SENSITIVE_REQUESTS=0',
    '-s', 'USE_SDL=0',
    '-s', 'INITIAL_MEMORY=5308416',
    '-s', 'ALLOW_MEMORY_GROWTH=1',
    '--no-heap-copy',
    path.resolve('./include/include/anitomy.hpp')
    // '-o', out
  ]

  if (isRelease) {
    spawnArgs = spawnArgs.concat([
      '-O3',
      '-s', 'USE_CLOSURE_COMPILER=1',
      '-s', 'IGNORE_CLOSURE_COMPILER_ERRORS=1',
      '--closure', '1',
      '--llvm-lto', '3'
    ])
  }

  console.log(`Starting ${isRelease ? 'release' : 'debug'} build with emcc args`, { spawnArgs })
  const emccExec = process.platform === 'win32' ? 'emcc.bat' : 'emcc'
  const s = spawn(path.join(emscriptenPath, emccExec), spawnArgs, {
    cwd: './dist',
    shell: true
  })

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
