const tasks = require('./tasks')

test('test setup is working', () => {
  expect(true).toBeTruthy()
})

test('Display the names of all the listeners', () => {
  // arrange
  const listeners = [
    { name: 'Debra' },
    { name: 'Jono' },
    { name: 'Stina' }
  ]
  // act
  const expected = 'Debra, Jono, Stina'
  const actual = tasks.displayNames(listeners)
  // assert
  expect(actual).toBe(expected)
})

test('Display the listeners and their genres', () => {
  // arrange
  const listenersAndGenres = [
    {
      name: 'Debra',
      genres: ['pop', 'chill']
    },
    {
      name: 'Jono',
      genres: ['rap', 'trap']
    },
    {
      name: 'Stina',
      genres: ['folk', 'trance']
    }
  ]
  // act
  const expected = {
    Debra: ['pop', 'chill'],
    Jono: ['rap', 'trap'],
    Stina: ['folk', 'trance']
  }
  const actual = tasks.displayNamesGenres(listenersAndGenres)
  // assert
  expect(actual).toStrictEqual(expected)
})

test('Display the name of the pop artists', () => {
  // arrange
  const popArtists = [
    { name: 'Queen', genre: 'pop' },
    { name: 'The Beatles', genre: 'pop' }
  ]
  // act
  const expected = 'Queen, The Beatles'
  const actual = tasks.displayPopArtists(popArtists)
  // assert
  expect(actual).toBe(expected)
})

test('Display the release IDs of the rap and trap artists', () => {
  // arrange
  const releaseIDs = [
    { name: 'The Roots', releaseIds: [6, 7] },
    { name: 'Baauer', releaseIds: [8, 9] }
  ]
  // act
  const expected = {
    'The Roots': '6, 7',
    'Baauer': '8, 9'
  }
  const actual = tasks.displayReleaseIDs(releaseIDs)
  // assert
  expect(actual).toStrictEqual(expected)
})

test('Display the names of releases from a particular artist', () => {
  // arrange
  const artists = [
    { name: 'Queen', id: '1', releases: ['Flash Gordon', 'A Kind of Magic', 'Innuendo'] },
    { name: 'Thievery Corporation', id: '2', releases: ['The Richest Man in Babylon', 'The Mirror Conspiracy'] },
    { name: 'The Roots', id: '3', releases: ['Phrenology', 'The Tipping Point'] },
    { name: 'Baauer', id: '4', releases: ['Harlem Shake', 'Dum Dum'] },
    { name: 'Iron and Wine', id: '5', releases: ['The Shephard\'s Dog', 'Our Endless Numbered Days'] },
    { name: 'Armin van Buuren', id: '6', releases: ['Imagine', 'This is What it Feels Like'] },
    { name: 'The Beatles', id: '7', releases: ['Abbey Road', 'Sgt. Pepper\'s Lonely Hearts Club Band'] }
  ]
  // act
  const expected = 'Phrenology, The Tipping Point'
  const actual = tasks.displayArtistReleases(artists)
  // assert
  expect(actual).toBe(expected)
})
