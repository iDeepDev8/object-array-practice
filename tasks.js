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

  return genres
}

function popArtists (arr) {
  let names = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].genre === 'pop') {
      names.push(arr[i].name)
    }
  }

  return names.join(', ')
}

module.exports = {
  displayNames,
  displayGenres,
  popArtists
}
