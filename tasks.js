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
module.exports = {

}