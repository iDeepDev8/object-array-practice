const tasks = require('./tasks')
const listeners = require('./data/listeners')
const artists = require('./data/artists')

const namesOfListeners = tasks.displayNames(listeners)
const genres = tasks.displayGenres(listeners)
const namesOfArtists = tasks.popArtists(artists)

function display (thingToDisplay) {
  // eslint-disable-next-line no-console
  console.log('\n', thingToDisplay)
}

display('Display the names of all of the listeners: ' + namesOfListeners)
display('Display the listeners and their genres:')
display(genres)
display('Display the names of the pop artists: ' + namesOfArtists)
