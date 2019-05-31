function displayNames (arr) {
  let names = []
  for (let i = 0; i < arr.length; i++) {
    names.push(arr[i].name)
  }
  return names.join(', ')
}

function displayGenres (arr) {
  let genres = {}

  for (let i = 0; i < arr.length; i++) {
    genres[arr[i].name] = arr[i].genres
  }

  console.log(genres)
  return genres
}

module.exports = {
  displayNames,
  displayGenres
}
