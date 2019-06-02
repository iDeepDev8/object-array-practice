const listeners = require('./data/listeners')
const artists = require('./data/artists')
const releases = require('./data/releases')
const tasks = require('./tasks')

test('Test platform not broken!', () => {
  expect(true).toBeTruthy()
})

test('Display all listeners names', () => {

  const actual = tasks.displayListenersNames(listeners)
  const expected = ['Debra', 'Jono', 'Stina']
  

  expect(actual).toEqual(expected)
})

test('Display listeners and their genres', () => {

  const actual = tasks.displayListenersAndGenres(listeners)
  const expected = [
    {
      name: 'Debra',
      genres: [
        'pop',
        'chill'
      ]
    }, {
      name: 'Jono',
      genres: [
        'rap',
        'trap'
      ]
    }, {
      name: 'Stina',
      genres: [
        'folk',
        'trance'
      ]
    }
  ]

  expect(actual).toEqual(expected)
})

test('Display all pop artists names', () => {

  const actual = tasks.displayPopArtistsNames(artists)
  const expected = ['Queen', 'The Beatles']
  

  expect(actual).toEqual(expected)
})

test('Display release IDs of rap and trap artists', () => {

  const actual = tasks.displayRapAndTrapIds(artists)
  const expected = [[6, 7], [8, 9]]
  

  expect(actual).toEqual(expected)
})

test('Display Queens release names', () => {

  const actual = tasks.displayQueenReleaseNames(artists, releases)
  const expected = ['Flash Gordon', 'A Kind of Magic', 'Innuendo']
  

  expect(actual).toEqual(expected)
})

test('Display artist names of debras genres', () => {

  const actual = tasks.displayDebrasArtists(listeners, artists)
  const expected = ['Queen', 'Thievery Corporation', 'The Beatles']
  

  expect(actual).toEqual(expected)
})