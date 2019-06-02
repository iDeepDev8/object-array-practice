function displayNames (array) {
  let names = []
  for (let i = 0; i < array.length; i++) {
    names.push(array[i].name)
  }
  return names.join(', ')
}

module.exports = {
  displayNames
}
