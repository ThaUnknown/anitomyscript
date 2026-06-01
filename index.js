import AnitomyNative from './dist/anitomyscript.js'

const FIELDS = [
  'anime_season', 'season_prefix', 'anime_title',
  'anime_type', 'anime_year', 'audio_term',
  'device_compatibility', 'episode_number', 'episode_number_alt',
  'episode_prefix', 'episode_title', 'file_checksum',
  'file_extension', 'file_name', 'language',
  'other', 'release_group', 'release_information',
  'release_version', 'source', 'subtitles',
  'video_resolution', 'video_term', 'volume_number',
  'volume_prefix', 'unknown',
]

let modPromise, pairs

export default async function parse (input) {
  if (!Array.isArray(input) && typeof input !== 'string') {
    throw new Error('Input must be either an Array or a string')
  }

  const mod = await (modPromise ??= AnitomyNative())
  pairs ??= FIELDS.map((name, i) => [mod.ElementCategory.values[i], name])
  const files = typeof input === 'string' ? [input] : input
  const anit = new mod.Anitomy()
  const results = []

  try {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      if (typeof file !== 'string') throw new Error(`Element at index ${i} is not a string`)
      anit.parse(file)
      const obj = {}
      for (const [cat, field] of pairs) {
        const vec = anit.get_all(cat)
        const length = vec.size()
        if (!length) continue
        obj[field] = Array.from({ length }, (_, j) => vec.get(j))
      }
      results.push(obj)
    }
  } finally {
    anit.delete()
  }

  return results
}
