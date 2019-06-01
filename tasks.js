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

function getArtistReleases(artistName, artists, releases) {
    const id = artists.find(artist => artist.name === artistName).id
    return releases
    .filter( release => release.id === id)
    .map(release => release.name)
}
module.exports = {

}