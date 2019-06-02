function displayNames (array) {
  let names = []
  for (let i = 0; i < array.length; i++) {
    names.push(array[i].name)
  }
  return names.join(', ')
}

function displayNamesGenres (array) {
  let namesAndGenres = {}
  for (let i = 0; i < array.length; i++) {
    namesAndGenres[array[i].name] = array[i].genres
  }
  return namesAndGenres
}

module.exports = {
  displayNames,
  displayNamesGenres
}
