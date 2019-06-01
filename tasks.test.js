const tasks = require('./tasks')

test('Test setup working', () => {
  expect(true).toBeTruthy()
})

test('Displays names of all listeners', () => {
// ARRANGE
  const listeners = [
    { name: 'Frodo' },
    { name: 'Gandalf' },
    { name: 'Aragorn' }
  ]

  const expected = 'Frodo, Gandalf, Aragorn'
  // ACT
  const actual = tasks.displayNames(listeners)
  // ASSERT
  expect(actual).toBe(expected)
})

test('Displays the listeners and their genres', () => {
  const listeners = [
    { name: 'Frodo',
      genres: ['k-pop', 'hip hop']
    },
    { name: 'Gandalf',
      genres: ['country', 'rock']
    },
    { name: 'Aragorn',
      genres: ['soul', 'reggae']
    }
  ]

  const expected = {
    Frodo: ['k-pop', 'hip hop'],
    Gandalf: ['country', 'rock'],
    Aragorn: ['soul', 'reggae']
  }

  const actual = tasks.displayGenres(listeners)
  expect(actual).toStrictEqual(expected)
})

test('Displays the names of the pop artists', () => {
  const artists = [
    { name: 'Lady Gaga', genre: 'pop' },
    { name: 'Jay-Z', genre: 'hip hop' },
    { name: 'Beyonce', genre: 'pop' },
    { name: 'Eminem', genre: 'rap' },
    { name: 'Justin Bieber', genre: 'pop' },
    { name: 'Rihanna', genre: 'pop' }
  ]

  const expected = 'Lady Gaga, Beyonce, Justin Bieber, Rihanna'
  const actual = tasks.popArtists(artists)
  expect(actual).toBe(expected)
})

test('Displays the release IDs of the rap and trap artists', () => {
  const artists = [
    { name: 'Lady Gaga', genre: 'pop', releaseIds: [1, 2] },
    { name: 'Drake', genre: 'trap', releaseIds: [3, 5] },
    { name: 'Eminem', genre: 'rap', releaseIds: [4, 5, 7] },
    { name: 'Future', genre: 'trap', releaseIds: [2, 4] },
    { name: 'Taylor Swift', genre: 'country', releaseIds: [6, 8] },
    { name: 'Kanye', genre: 'rap', releaseIds: [3, 5] }
  ]

  const expected = {
    Drake: [3, 5],
    Eminem: [4, 5, 7],
    Future: [2, 4],
    Kanye: [3, 5]
  }

  const actual = tasks.displayIDs(artists)
  expect(actual).toStrictEqual(expected)
})
