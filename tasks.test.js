test('First Jest Test', () => {
});

test('test setup working', () => {
    expect(true).toBeTruthy()
  })

const tasks = require('./tasks')

test('display the names of all the listeners', () => {
    // ARRANGE
    const listeners = [ 
        { name: 'Debra' },
        { name: 'Jono' },
        { name: 'Stina' } 
    ]
    const expected = 'Debra, Jono, Stina'
    // ACT
    const actual = tasks.displayNames(listeners)
    // ASSERT
    expect(actual).toBe(expected)
})

test('display the listeners and their genres', () => {
    const listeners = [ 
        { name: 'Debra', genres: ['pop', 'chill']},
        { name: 'Jono',  genres: ['rap', 'trap']},
        { name: 'Stina',  genres: ['folk', 'trance']}
    ]

    const expected = {
        Debra: ['pop', 'chill'],
        Jono: ['rap', 'trap'],
        Stina: ['folk', 'trance']
    }

    const actual = tasks.displayGenres(listeners)
    expect(actual).toBe(expected)
})

test('display the name of the pop artists', () => {
    const artists = [ 
        { name: 'Queen' },
        { name: 'Thievery Corporation' },
        { name: 'The Roots' },
        { name: 'Baauer' },
        { name: 'Iron & Wine' },
        { name: 'Armin van Buuren' },
        { name: 'The Beatles' }
    ]

    const expected = [ 
        'Queen, Thievery Corporation, The Roots, Baauer, Iron & Wine, Armin van Buuren, The Beatles' 
    ]

    const actual = tasks.displayArtists(artists)
    expect(actual).toBe(expected)
})

test('display the release IDs of the rap and trap artists', () => {
    const artists = [ 
        { name: 'The Roots', genre: 'rap', releaseIds: [6, 7] },
        { name: 'Baauer', genre: 'trap', releaseIds: [8, 9] }
    ]

    const expected = {
        'The Roots': [6, 7],
        'Baauer': [8, 9]
    }

    const actual = tasks.displayIDs(artists)
    expect(actual).toBe(expected)
})

test('display the names of the releases by Queen', () => {
    const releases = [ 
        { name: 'Flash Gordon' },
        { name: 'A Kind of Magic' },
        { name: 'Innuendo' }
    ]

    const expected = [ 
        'Flash Gordon, A Kind of Magic, Innuendo'
    ]

    const actual = tasks.displayReleases(artists, releases)
    expect(actual).toBe(expected)
})

test('display the artist names of Debras genres', () => {
    const listeners = [ 
        { name: 'Debra', genres: ['pop', 'chill'], artists: ['Queen', 'Thievery Corporation', 'The Beatles'] }
    ]

    const expected = [
        'Queen, Thievery Corporation, The Beatles'
    ]

    const actual = tasks.displayArtistByGenre(listeners, artists)
    expect(actual).toBe(expected)
})

test('display the release names of Jonos genres', () => {
    const releases = [ 
        { name: 'Jono', genres: ['rap', 'trap'], releases: ['Phrenology', 'The Tipping Point', 'Harlem Shake', 'Dum Dum', ] }
    ]

    const expected = [
        'Phrenology', 'The Tipping Point', 'Harlem Shake', 'Dum Dum'
    ]

    const actual = tasks.displayReleasesByGenre(listeners, releases)
    expect(actual).toBe(expected)
})

test('display the artist and release names of all of the listeners', () => {
    const listeners = [
        { name: 'Debra', genres: ['pop', 'chill']}, 
        { name: 'Jono', genres: ['rap', 'trap']}, 
        { name: 'Stina', genres: ['folk', 'trance']}
    ]
    
    const artists = [
        { name: 'Queen', genre: 'pop', id: 1 }, 
        { name: 'Thievery Corporation', genre: 'chill', id: 2 },
        { name: 'The Roots', genre: 'rap', id: 3 },
        { name: 'Baauer', genre: 'trap', id: 4 },
        { name: 'Iron & Wine', genre: 'folk', id: 5 },
        { name: 'Armin van Buuren', genre: 'trance', id: 6 },
        { name: 'The Beatles', genre: 'pop', id: 7 },
    ]

    const releases = [
        { name: 'Flash Gordon', genre: 'pop', artistId: 1 }, 
        { name: 'A Kind of Magic', genre: 'pop', artistId: 1 },
        { name: 'Innuendo', genre: 'pop', artistId: 1 },
        { name: 'The Richest Man in Babylon', genre: 'chill', artistId: 2 },
        { name: 'The Mirror Conspiracy', genre: 'chill', artistId: 2 },
        { name: 'Phrenology', genre: 'rap', artistId: 3 },
        { name: 'The Tipping Point', genre: 'rap', artistId: 3 },
        { name: 'Harlem Shake', genre: 'trap', artistId: 4 },
        { name: 'Dum Dum', genre: 'trap', artistId: 4 },
        { name: 'The Shepherds Dog', genre: 'folk', artistId: 5 },
        { name: 'Our Endless Numbered Days', genre: 'folk', artistId: 5 },
        { name: 'Imagine', genre: 'trance', artistId: 6 },
        { name: 'This is What it Feels Like', genre: 'trance', artistId: 6 },
        { name: 'Abbey Road', genre: 'pop', artistId: 7 },
        { name: 'Sgt. Peppers Lonely Hearts Club Band', genre: 'pop', artistId: 7 },
    ]

    const expected = {
        Debra: {
            'Queen': ['Flash Gordon', 'A Kind of Magic', 'Innuendo'],
            'Thievery Corporation': ['The Richest Man in Babylon', 'The Mirror Conspiracy'],
            'The Beatles': ['Abbey Road', 'Sgt. Peppers Lonely Hearts Club Band']
        },
        Jono: {
            'The Roots': ['Phrenology', 'The Tipping Point'],
            'Baauer': ['Harlem Shake', 'Dum Dum']
        },
        Stina: {
            'Iron & Wine': ['The Shepherds Dog', 'Our Endless Numbered Days'],
            'Armin van Buuren': ['Imagine', 'This is What it Feels Like']
        }
    }

    const actual = tasks.displayAll(listeners, artists, releases)
    expect(actual).toBe(expected)
})