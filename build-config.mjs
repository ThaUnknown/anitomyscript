import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const inc = path.resolve(__dirname, 'include')
const src = path.resolve(__dirname, 'src')

export const includeDirs = [inc]

export const sources = [
  path.resolve(inc, 'anitomy/anitomy.cpp'),
  path.resolve(inc, 'anitomy/element.cpp'),
  path.resolve(inc, 'anitomy/keyword.cpp'),
  path.resolve(inc, 'anitomy/parser.cpp'),
  path.resolve(inc, 'anitomy/parser_helper.cpp'),
  path.resolve(inc, 'anitomy/parser_number.cpp'),
  path.resolve(inc, 'anitomy/string.cpp'),
  path.resolve(inc, 'anitomy/token.cpp'),
  path.resolve(inc, 'anitomy/tokenizer.cpp'),
  path.resolve(src, 'anitomyscript.cpp'),
]

export const outputFile = path.resolve(__dirname, 'dist', 'anitomyscript.js')

export const baseFlags = [
  '-std=c++17',
  '-fno-exceptions',
  '-Wall',
  '-Wpedantic',
  '-s', 'EXPORT_NAME="anitomyscript"',
  '-s', 'WASM=1',
  '-s', 'ENVIRONMENT=web,node',
  '-s', 'FILESYSTEM=0',
  '-s', 'MODULARIZE=1',
  '-s', 'EXPORT_ES6=1',
  '-s', 'DYNAMIC_EXECUTION=0',
  '-s', 'TEXTDECODER=2',
  '-s', 'SUPPORT_LONGJMP=0',
  '-s', 'EMBIND_AOT=1',
  '-s', 'INITIAL_MEMORY=524288',
  '-s', 'ALLOW_MEMORY_GROWTH=1',
  '-lembind',
]

export const releaseFlags = [
  '-O3',
]

export const debugFlags = [
  '-O0',
  '-g',
  '-v',
]
