const tasks = require('./tasks')
const listeners = require('./data/listeners')

const names = tasks.displayNames(listeners)

// eslint-disable-next-line no-console
console.log(names)
