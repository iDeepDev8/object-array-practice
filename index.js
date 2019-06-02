const tasks = require('./tasks')
//const artists = require('../artists')
const listeners = require('./data/listeners')
//const releases = require('../releases')

const allListeners = tasks.getListeners(listeners)
const listenerGenres = tasks.getGenres(listeners)

//need a display function
console.log('The names of all of the listeners are: ' + allListeners)
console.log('The listeners and their genres are: ' + allListeners[listenerGenres])

//function display () {
//    console.log()
//}