const listeners = require('./data/listeners')
const releases = require('./data/releases')
const artists = require('./data/artists')
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
