const tasks = require('./tasks')
const listeners = require('./data/listeners')

const names = tasks.displayNames(listeners)
const genres = tasks.displayGenres(listeners)

function display (thingToDisplay) {
  // eslint-disable-next-line no-console
  console.log(thingToDisplay)
}

display(' ')
display('Display the names of all of the listeners: ' + names)
display('Display the listeners and their genres:')
display(genres)
