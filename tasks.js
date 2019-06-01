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

function displayAll (listeners, artists, releases) {
  let result = {}
  let artistNames = []
  let artistIDs = []
  let releaseObject = {}

  listeners.forEach(x => {
    result[x.name] = {}
  }) 

  for (let i = 0; i < listeners.length; i++) {
    artistNames = Object.values(getArtistsOfGenres(listeners, artists, listeners[i].name)).toString().split(',')
    artistIDs = getIDsFromArtistNames (artistNames, artists)
    releaseObject = createObject (artistIDs, releases, artists)
    result[listeners[i].name] = releaseObject
  }
  console.log(result)
  return result
}


//  [ 'Eminem', 'Jay-Z', 'Kendrick Lamar' ]
// write a function that takes an array of names and returns an array of IDs

function getIDsFromArtistNames (names, artists) {
  let artistIDs = []

  for (let i=0; i<names.length; i++) {
    for (let j=0; j<artists.length; j++) {
      if (names[i] === artists[j].name) {
        artistIDs.push(artists[j].id)
      }
    }
  }  
return artistIDs
}

//  [ 4, 2, 5 ]

  // write a function to create an array of release names when given artist name
  function getReleasesOfArtist (name, artists, releases) {
    let artistReleases = []

    for (let i=0; i<artists.length; i++) {
      if (name === artists[i].name) {
        for (let j=0; j<releases.length; j++) {
          if (artists[i].id === releases[j].artistId)
          artistReleases.push(releases[j].name)
        }
      }
    }
  return artistReleases
}

  // write a function that takes the artist ID and creates an object of {artist: [releases]}

function createObject (IDs, releases, artists) {
  let artistObject = {}
  for (let l = 0; l<IDs.length; l++) {
    for (let i=0; i<releases.length; i++) {
      for (let j=0; j<artists.length; j++) {
        if (IDs[l] === releases[i].artistId && IDs[l] === artists[j].id) {
          artistObject[artists[j].name] = getReleasesOfArtist(artists[j].name, artists, releases) 
        }
      }
    }
  }
  return artistObject
  }

module.exports = {
  displayNames,
  displayGenres,
  popArtists,
  displayIDs,
  displayReleases,
  getArtistsOfGenres,
  getReleasesOfGenres,
  displayAll
}
