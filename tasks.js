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

function displayPopArtists (array) {
  let popArtists = []
  for (let i = 0; i < array.length; i++) {
    popArtists.push(array[i].name)
  }
  return popArtists.join(', ')
}

function displayReleaseIDs (array) { // DON'T UNDERSTAND THIS ONE SOMEONE HELP
  let releaseIDs = {}
  for (let i = 0; i < array.length; i++) {
    releaseIDs[array[i].name] = array[i].releaseIds.join(', ')
  }
  return releaseIDs
}

function displayArtistReleases (array, artist) {

}

module.exports = {
  displayNames,
  displayNamesGenres,
  displayPopArtists,
  displayReleaseIDs,
  displayArtistReleases
}
