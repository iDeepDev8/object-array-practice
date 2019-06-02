// Data Imports
const listeners = require('./data/listeners')
const releases = require('./data/releases')
const artists = require('./data/artists')

// Module Import
const Tasks = require('./tasks')

// Display the names of all of the listeners
console.log("Listeners: ")
Tasks.getListenerNames(listeners)
    .forEach(name => console.log(`    ${name}`))
console.log("")


//Display the listeners and their genres
Tasks.getListenerGenres(listeners)
    .forEach(element => console.log(`${element.name}'s generes: ${element.genres}`));
console.log("")


// Display the name of the pop artists
console.log('Pop Artists:')
Tasks.getArtistNames(artists, ['pop'])
    .forEach(artist => console.log(`    ${artist}`))
console.log("")

// Display the release IDs of the rap and trap artists
console.log('Rap & Trap Artists:')
Tasks.getArtistIDs(artists, ['rap', 'trap'])
    .forEach(id => console.log(`    ${id}`))
console.log("")


//Display the names of the releases by Queen
console.log('Queen\'s releases')
Tasks.getArtistReleases(Tasks.getArtist("Queen", artists).id, releases)
    .forEach(release => console.log(`    ${release}`))
console.log("")


// Get listeners and map releases to artists of their genre
const mappedListeners = listeners.map(listener => {
    listener.artists = Tasks
        .getArtistIDs(artists, listener.genres)
        .map(artistId => {
            let artist = artists.find(artist => artist.id === artistId)
            artist.releases = Tasks.getArtistReleases(artist.id, releases)
            return artist
        })
    return listener
})

// Display artists and release names of all the listners
mappedListeners.forEach(listener =>{
    console.log(`${listener.name}\'s favourite artists: `)
    listener.artists.forEach(artist => console.log(`    Artist: ${artist.name}, Releases : ${artist.releases}`))
    console.log("")
})