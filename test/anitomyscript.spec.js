import { expect } from 'chai'
import logger from 'mocha-logger'
import anitomyscript from '../index.js'

import fixtures from './fixtures.data.json' with { type: 'json' }
const fixtureKeys = Object.keys(fixtures)

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
const arr = v => Array.isArray(v) ? v : [v]

describe('anitomyscript', function () {
  it(`parse - single file (${fixtureKeys.length} test cases)`, async function () {
    expect(fixtureKeys.length).to.be.greaterThan(0)

    for (const key of fixtureKeys) {
      logger.log(key)
      const fixture = fixtures[key]
      const [res] = await anitomyscript(key)
      for (const field of FIELDS) {
        if (field in fixture) {
          expect(res[field]).to.deep.eq(arr(fixture[field]))
        }
      }
    }
  })

  it(`parse - array of files (${fixtureKeys.length} test cases)`, async function () {
    this.timeout(3000)
    const resArr = await anitomyscript(fixtureKeys)

    expect(resArr).to.be.a('array')
    expect(fixtureKeys.length).to.be.greaterThan(0)
    expect(resArr.length).to.deep.eq(fixtureKeys.length)

    resArr.forEach((res, index) => {
      const testKey = fixtureKeys[index]
      const fixture = fixtures[testKey]
      logger.log(testKey)
      for (const field of FIELDS) {
        if (field in fixture) {
          expect(res[field]).to.deep.eq(arr(fixture[field]))
        }
      }
    })
  })

  it('parse - invalid values (single)', async function () {
    const errorMessage = 'Input must be either an Array or a string'
    await Promise.all([
      anitomyscript(null).catch((err) => expect(err.message).to.be.eq(errorMessage)),
      anitomyscript(0).catch((err) => expect(err.message).to.be.eq(errorMessage)),
      anitomyscript(undefined).catch((err) => expect(err.message).to.be.eq(errorMessage))
    ])
  })

  it('parse - invalid array input', async function () {
    try {
      await anitomyscript(['Hello', 'World', null])
    } catch (err) {
      expect(err.message).to.be.deep.eq('Element at index 2 is not a string')
    }
  })

  it('parse - should not exceed heap size', async function () {
    this.timeout(40000)
    const maxIterations = 1000
    let currIteration = 1
    for (; currIteration < maxIterations; currIteration++) {
      expect(await anitomyscript(fixtureKeys)).to.have.lengthOf(fixtureKeys.length)
      logger.log(`Iteration ${currIteration}`)
    }
  })
})
