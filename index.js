const tasks = require('./tasks')
const listeners = require('./data/listeners')
const artists = require('./data/artists')
const releases = require('./data/releases')

const listenerNames = tasks.displayNames(listeners)
const genres = tasks.displayGenres(listeners)
const artistNames = tasks.popArtists(artists)
const IDs = tasks.displayIDs(artists)
const releaseNames = tasks.displayReleases(artists, releases, 'Queen')
const genreArtists = tasks.getArtistsOfGenres(listeners, artists, 'Debra')
const genreReleases = tasks.getReleasesOfGenres(listeners, releases, 'Jono')

function display (thingToDisplay) {
  // eslint-disable-next-line no-console
  console.log('\n', thingToDisplay)
}

display('Display the names of all of the listeners: ' + listenerNames)
display('Display the listeners and their genres:')
display(genres)
display('Display the names of the pop artists: ' + artistNames)
display('Display the release IDs of the rap and trap artists:')
display(IDs)
display('Display the names of the releases by Queen: ' + releaseNames)
display('Display the artist names of Debras genres:')
display(genreArtists)
display('Display the release names of Jonos genres:')
display(genreReleases)
