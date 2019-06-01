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

test('Displays the release names of a particular artist', () => {
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

test('Displays the names of the artists that match the genre of a particular listener', () => {
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

test('Displays the names of the releases that match the genre of a particular listener', () => {
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

  const releases = [
    { genre: 'pop', name: 'Dangerously in Love' },
    { genre: 'reggae', name: 'Catch a Fire' },
    { genre: 'pop', name: 'Unapologetic' },
    { genre: 'rap', name: 'The Slim Shady' },
    { genre: 'soul', name: 'Whats Going On' },
    { genre: 'soul', name: 'Songs in the Key of Life' }
  ]

  const expected = {
    soul: ['Whats Going On', 'Songs in the Key of Life'],
    reggae: ['Catch a Fire']
  }

  const actual = tasks.getReleasesOfGenres(listeners, releases, 'Aragorn')
  expect(actual).toEqual(expected)
})

test('Displays the names of the releases that match the artist', () => {
  const artists = [
    { name: 'Lady Gaga', id: 1 },
    { name: 'Beyonce', id: 3 },
    { name: 'Eminem', id: 4 }
  ]

  const releases = [
    { name: 'Joanne', artistId: 1 },
    { name: 'Dangerously in Love', artistId: 3 },
    { name: 'The Slim Shady', artistId: 4 },
    { name: 'The Fame', artistId: 1 },
    { name: 'Revival', artistId: 4 }
  ]

  const expected = {
    'Lady Gaga': ['Joanne', 'The Fame'],
    Beyonce: ['Dangerously in Love'],
    Eminem: ['The Slim Shady', 'Revival']
  }

  const actual = tasks.matchArtists(artists, releases)
  expect(actual).toEqual(expected)
})

test('Displays artist and release names of all of the listeners', () => {
  const listeners = [
    { name: 'Frodo',
      genres: ['pop', 'hip hop']
    },
    { name: 'Gandalf',
      genres: ['rap', 'hip hop']
    }
  ]

  const artists = [
    { name: 'Lady Gaga', genre: 'pop', id: 1 },
    { name: 'Jay-Z', genre: 'hip hop', id: 2 },
    { name: 'Beyonce', genre: 'pop', id: 3 },
    { name: 'Eminem', genre: 'rap', id: 4 },
    { name: 'Kendrick Lamar', genre: 'hip hop', id: 5 }
  ]

  const releases = [
    { genre: 'pop', name: 'Joanne', artistId: 1 },
    { genre: 'hip hop', name: 'The Blueprint', artistId: 2 },
    { genre: 'pop', name: 'Dangerously in Love', artistId: 3 },
    { genre: 'rap', name: 'The Slim Shady', artistId: 4 },
    { genre: 'pop', name: 'The Fame', artistId: 1 },
    { genre: 'hip hop', name: 'DAMN.', artistId: 5 },
    { genre: 'rap', name: 'Revival', artistId: 4 }
  ]

  const expected = {
    Frodo: {
      'Lady Gaga': ['Joanne', 'The Fame'],
      'Jay-Z': ['The Blueprint'],
      Beyonce: ['Dangerously in Love'],
      'Kendrick Lamar': ['DAMN.']
    },
    Gandalf: {
      'Jay-Z': ['The Blueprint'],
      Eminem: ['The Slim Shady', 'Revival'],
      'Kendrick Lamar': ['DAMN.']
    }
  }

  const actual = tasks.displayAll(listeners, artists, releases)
  expect(actual).toEqual(expected)
})
