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
