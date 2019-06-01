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

function getArtistsOfGenres (listeners, artists, name) {
  let genres = []
  let result = {}

  for (let i = 0; i < listeners.length; i++) {
    if (listeners[i].name === name) {
      genres = listeners[i].genres
    }
  }

  for (let i = 0; i < genres.length; i++) {
    result[genres[i]] = []
    for (let j = 0; j < artists.length; j++) {
      if (artists[j].genre === genres[i]) {
        result[genres[i]].push(artists[j].name)
      }
    }
  }
  return result
}

function getReleasesOfGenres (listeners, releases, name) {
  let result = {}
  let genres = []

  for (let i = 0; i < listeners.length; i++) {
    if (listeners[i].name === name) {
      genres = listeners[i].genres
    }
  }

  for (let i = 0; i < genres.length; i++) {
    result[genres[i]] = []
    for (let j = 0; j < releases.length; j++) {
      if (releases[j].genre === genres[i]) {
        result[genres[i]].push(releases[j].name)
      }
    }
  }
  return result
}

function matchArtists (artists, releases) {
  let result = {}

  for (let i = 0; i < artists.length; i++) {
    result[artists[i].name] = []
    for (let j = 0; j < releases.length; j++) {
      if (artists[i].id === releases[j].artistId) {
        result[artists[i].name].push(releases[j].name)
      }
    }
  }
  return result
}

function displayAll (listeners, artists, releases) {
  let result = {}
  let genres = []
  let keys = []

  for (let i = 0; i < listeners.length; i++) {
    keys = Object.values(getArtistsOfGenres(listeners, artists, listeners[i].name)).toString().split(',')
    
    listeners.forEach(x => {
      result[x.name] = {}
      genres = x.genres



      Object.keys(result[x.name]).push(keys)  
      console.log(keys)   
    })
    
  }
  return result
}

module.exports = {
  displayNames,
  displayGenres,
  popArtists,
  displayIDs,
  displayReleases,
  getArtistsOfGenres,
  getReleasesOfGenres,
  matchArtists,
  displayAll
}
