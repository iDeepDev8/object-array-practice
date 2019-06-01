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
  expect(actual).toEqual(expected)
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
  expect(actual).toEqual(expected)
})

test('Display the release names of a particular artist', () => {
  const artists = [
    { name: 'Beyonce', id: 1 },
    { name: 'Eminem', id: 2 },
    { name: 'Rihanna', id: 3 }
  ]

  const releases = [
    { id: 1, artistId: 1, name: 'Dangerously in Love' },
    { id: 2, artistId: 1, name: 'Lemonade' },
    { id: 3, artistId: 3, name: 'Unapologetic' },
    { id: 4, artistId: 2, name: 'The Slim Shady' },
    { id: 5, artistId: 3, name: 'Good Girl Gone Bad' }
  ]

  const expected = 'Unapologetic, Good Girl Gone Bad'
  const actual = tasks.displayReleases(artists, releases, 'Rihanna')
  expect(actual).toBe(expected)
})

test('Display the names of the artists that match the genre of a particular listener', () => {
  const listeners = [
    { name: 'Frodo',
      genres: ['pop', 'hip hop']
    },
    { name: 'Gandalf',
      genres: ['rap', 'hip hop']
    },
    { name: 'Aragorn',
      genres: ['soul', 'reggae']
    }
  ]

  const artists = [
    { name: 'Lady Gaga', genre: 'pop' },
    { name: 'Jay-Z', genre: 'hip hop' },
    { name: 'Beyonce', genre: 'pop' },
    { name: 'Eminem', genre: 'rap' },
    { name: 'Justin Bieber', genre: 'pop' },
    { name: 'Rihanna', genre: 'pop' },
    { name: 'Bob Marley', genre: 'reggae' }
  ]

  const expected = {
    pop: ['Lady Gaga', 'Beyonce', 'Justin Bieber', 'Rihanna'],
    'hip hop': ['Jay-Z']
  }

  const actual = tasks.getArtistsOfGenres(listeners, artists, 'Frodo')
  expect(actual).toEqual(expected)
}
)
