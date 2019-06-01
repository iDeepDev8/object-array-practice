function displayNames (arr) {
    let names = []
    for (let i = 0; i < arr.length; i++) {
        names.push(arr[i].name)
    }
    return names.join(', ')
}

function displayGenres (arr) {
    let genres = {}
    for (let i = 0; i < arr.length; i++) {
        genres(arr[i].name) = arr[i].genres
    }
    return genres
}

function displayArtists (arr) {
    let artist = []
    for (let i = 0; i < arr.length; i++) {
        artist.push(arr[i].artists)
    }
    return artist.join(', ')
}

function displayIDs () {
    
}

function displayReleases () {
    
}

function displayReleasesByGenre () {
    
}

function displayAll () {
    
}

module.exports = {
    displayNames,
    displayGenres,
    displayArtists,
    displayIDs,
    displayReleases,
    displayReleasesByGenre,
    displayAll
}