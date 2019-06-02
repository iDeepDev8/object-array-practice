module.exports = {
  getListeners,
  getGenres
}

function getListeners (listeners) {
  let allListeners = []
  for (let i = 0; i < listeners.length; i++) {
    allListeners.push(listeners[i].name)
  }
  return allListeners
}

function getGenres (listeners) {
  let listenerGenres = {}
  for (let i = 0; i < listeners.length; i++) {
    listenerGenres[listeners[i].name] = listeners[i].genres
  }
  return listenerGenres
}

