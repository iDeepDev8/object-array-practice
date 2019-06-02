function getListenerNames(listeners) {
    return listeners.map(e => {
        return e.name
    })
}

function getListenerGenres(listeners) {
    return listeners.map(e => {
        return { name: e.name, genres: [...e.genres] }
    })
}

function getArtistNames(artists, genres) {
    return artists
        .filter(artist => {
            return genres.includes(artist.genre)
        })
        .map(artist => {
            return artist.name
        })
}

function getArtistIDs(artists, genres) {
    return artists
        .filter(artist => {
            return genres.includes(artist.genre)
        })
        .map(artist => {
            return artist.id
        })
}

function getArtistReleases(artistId, releases) {
    return releases
    .filter( release => release.artistId === artistId)
    .map(release => release.name)
}
function getArtist(name, artists){
    return artists.find(artist=> artist.name === name)
}

module.exports = {
    getListenerNames,
    getListenerGenres,
    getArtistNames,
    getArtistReleases,
    getArtistIDs
}