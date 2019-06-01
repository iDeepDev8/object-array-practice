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

function displayIDs (arr) {
  let IDs = {}

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].genre === 'rap' || arr[i].genre === 'trap') {
      IDs[arr[i].name] = arr[i].releaseIds
    }
  }

  return IDs
}

function displayReleases (artistArray, releaseArray, artist) {
  let ID = 0
  let releases = []

  for (let i = 0; i < artistArray.length; i++) {
    for (let j = 0; j < releaseArray.length; j++) {
      if (artistArray[i].name === artist) {
        ID = artistArray[i].id

        if (releaseArray[j].artistId === ID) {
          releases.push(releaseArray[j].name)
        }
      }
    }
  }
  return releases.join(', ')
}

module.exports = {
  displayNames,
  displayGenres,
  popArtists,
  displayIDs,
  displayReleases
}
