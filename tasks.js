const displayListenersProp = (listenersArray, prop) => {
  return listenersArray.map(listener => listener[prop]);
};

const displayListenersAndGenres = listenersArray => {
  return listenersArray.map(listener => {
    let newListener = {};
    newListener.name = listener.name;
    newListener.genres = listener.genres;
    return newListener;
  });
};

const displayArtistsNamesByGenre = (artistsArray, genreName) => {
  return artistsArray
    .filter(artist => artist.genre === genreName)
    .map(genreArtist => genreArtist.name);
};

const displayGenreIds = (artistsArray, genreName) => {
  return artistsArray
    .filter(artist => artist.genre === genreName)
    .flatMap(rapAndTrapArtist => rapAndTrapArtist.releaseIds);
};

const displayArtistReleaseNames = (artistsArray, releasesArray, artistName) => {
  const queenReleaseIds = artistsArray.find(artist => artist.name === artistName)
    .releaseIds;
  return releasesArray
    .filter(release => queenReleaseIds.includes(release.id))
    .map(release => release.name);
};

const displayListenerArtists = (listenersArray, artistsArray, listenerName) => {
  const listenerGenres = listenersArray.find(listener => listener.name === listenerName)
    .genres;
  return artistsArray
    .filter(artist => listenerGenres.includes(artist.genre))
    .map(listenerArtist => listenerArtist.name);
};

const displayListenerReleases = (listenersArray, artistsArray, releasesArray, listenerName) => {
  const listenerGenres = listenersArray.find(listener => listener.name === listenerName)
    .genres;
  const listenerReleaseIds = artistsArray
    .filter(artist => listenerGenres.includes(artist.genre))
    .flatMap(listenerArtist => listenerArtist.releaseIds);

    return releasesArray
    .filter(release => listenerReleaseIds.includes(release.id))
    .map(release => release.name);
};

const displayAllListenerArtistsAndReleases = (listenersArray, artistsArray, releasesArray) => {
  const allListenersArray = []
  displayListenersProp(listenersArray, 'name').forEach(listener => {
    let listenerObj = {
      name: listener,
      artistsNames: displayListenerArtists(listenersArray, artistsArray, listener),
      releaseNames: displayListenerReleases(listenersArray, artistsArray, releasesArray, listener)
    }
    allListenersArray.push(listenerObj)
  });
  return allListenersArray
}

module.exports = {
  displayListenersProp,
  displayListenersAndGenres,
  displayArtistsNamesByGenre,
  displayGenreIds,
  displayArtistReleaseNames,
  displayListenerArtists,
  displayListenerReleases,
  displayAllListenerArtistsAndReleases
};
