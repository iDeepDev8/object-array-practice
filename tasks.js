// Receive Array listners as param, returns Array of listener names
function getListenerNames(listeners) {
    return listeners.map(e => {
        return e.name
    })
}

// Receive Receive Array listners as param, returns Array of Objects
// Objects have name and genres as properties
function getListenerGenres(listeners) {
    return listeners.map(e => {
        return { name: e.name, genres: [...e.genres] }
    })
}

// Receive Array artists, genres as params, returns Array of artist names
function getArtistNames(artists, genres) {
    return artists
        .filter(artist => {
            return genres.includes(artist.genre)
        })
        .map(artist => {
            return artist.name
        })
}

// Receive Array artists, genres as params, returns Array of artist IDs
function getArtistIDs(artists, genres) {
    return artists
        .filter(artist => {
            return genres.includes(artist.genre)
        })
        .map(artist => {
            return artist.id
        })
}

// Receive artistId, Array releases as params, returns Array of artist's releases
function getArtistReleases(artistId, releases) {
    return releases
    .filter( release => release.artistId === artistId)
    .map(release => release.name)
}

// Receive name, Array artists as params, returns Object Artist
    return artists.find(artist=> artist.name === name)
}

// Exports
module.exports = {
    getListenerNames,
    getListenerGenres,
    getArtistNames,
    getArtistReleases,
    getArtistIDs,
    getArtist
}