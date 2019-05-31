const tasks = require('./tasks')
const listeners = require('./data/listeners')

const names = tasks.displayNames(listeners)
const genres = tasks.displayGenres(listeners)

// eslint-disable-next-line no-console
console.log(' ')

// eslint-disable-next-line no-console
console.log('Display the names of all of the listeners:', names)

// eslint-disable-next-line no-console
console.log('Display the listeners and their genres:')
console.log(genres)
