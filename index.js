function display (thingToDisplay) {
    // eslint-disable-next-line no-console
    console.log('\n', thingToDisplay)
  }

const tasks = require('./tasks')
const listeners = require('./data/listeners')
const artists = require('./data/artists')
const releases = require('./data/releases')

const listeners = tasks.displayNames(listeners)
const genres = tasks.displayGenres(listeners)
const artists = tasks.displayArtists(artists)
const IDs = tasks.displayIDs(artists)
const releaseNames = tasks.displayReleases(artists, releases, 'Queen')
const genreArtists = tasks.displayArtistByGenre(listeners, artists, 'Debra')
const genreReleases = tasks.displayReleasesByGenre(listeners, releases, 'Jono')


display('display the names of all of the listeners: ' + listenerNames)
display('display the listeners and their genres:')
display(genres)
display('display the name of the pop artists: ' + artistNames)
display('display the release IDs of the rap and trap artists:')
display(IDs)
display('display the names of the releases by Queen: ' + releaseNames)
display('display the artist names of Debras genres:')
display(genreArtists)
display('display the release names of Jonos genres:')
display(genreReleases)