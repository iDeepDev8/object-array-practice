// Module Imports
const getArtistIDs = require('../tasks').getArtistIDs
const getArtistReleases = require('../tasks').getArtistReleases

// Integrated test for getting artists and release naems of all listeners
test('should display artists and release names of all the listeners', () => {
    // Arrange
    const listeners = [{ name: 'Debora', genres: ['trap', 'bop'], age: 23 }, { name: 'Jono', genres: ['trance', 'techno'], age: 25 }, { name: 'Stina', genres: ['jazz', 'rnb', 'rock'], age: 19 }]
    const artists = [{ id: 1, name: 'Queen', genre: 'rock' }, { id: 2, name: 'Armin', genre: 'trance' }, { id: 3, name: 'Knifeparty', genre: 'trap' }]
    const releases = [{ id: 1, artistId: 1, name: 'Night at the Opera', genre: 'Rock', year: 1975 }, { id: 2, artistId: 2, name: 'Mirage', genre: 'Trance', year: 2010 }, { id: 3, artistId: 3, name: 'Abandon Ship', genre: 'Trap', year: 2010 }]

    const expected = [{
        name: 'Debora',
        genres: ['trap', 'bop'],
        age: 23,
        artists: [{
            id: 3,
            name: 'Knifeparty',
            genre: 'trap',
            releases: ['Abandon Ship']
        }]
    },
    {
        name: 'Jono',
        genres: ['trance', 'techno'],
        age: 25,
        artists: [{ id: 2, name: 'Armin', genre: 'trance', releases: ['Mirage'] }]
    },
    {
        name: 'Stina',
        genres: ['jazz', 'rnb', 'rock'],
        age: 19,
        artists: [{
            id: 1,
            name: 'Queen',
            genre: 'rock',
            releases: ['Night at the Opera']
        }]
    }]

    // Act
    const actual = listeners
        .map(listener => {
            listener.artists = 
                getArtistIDs(artists, listener.genres)
                .map(artistId => {
                    let artist = artists.find(artist => artist.id === artistId)
                    artist.releases = getArtistReleases(artist.id, releases)
                    return artist
                })
            return listener
        })
    // Assert
    expect(actual).toEqual(expected)
});