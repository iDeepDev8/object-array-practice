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

module.exports = {

}