const getListenersProp = (listenersArray, prop) => {
  return listenersArray.map(listener => listener[prop]);
};

const getListenersAndGenres = listenersArray => {
  return listenersArray.map(listener => {
    let newListener = {};
    newListener.name = listener.name;
    newListener.genres = listener.genres;
    return newListener;
  });
};

const getArtistsNamesByGenre = (artistsArray, genreName) => {
  return artistsArray
    .filter(artist => artist.genre === genreName)
    .map(genreArtist => genreArtist.name);
};

const getReleaseIds = (artistsArray, genreName) => {
  return artistsArray
    .filter(artist => artist.genre === genreName)
    .flatMap(rapAndTrapArtist => rapAndTrapArtist.releaseIds);
};

const getArtistReleaseNames = (artistsArray, releasesArray, artistName) => {
  const queenReleaseIds = artistsArray.find(artist => artist.name === artistName)
    .releaseIds;
  return releasesArray
    .filter(release => queenReleaseIds.includes(release.id))
    .map(release => release.name);
};

const getListenerArtists = (listenersArray, artistsArray, listenerName) => {
  const listenerGenres = listenersArray.find(listener => listener.name === listenerName)
    .genres;
  return artistsArray
    .filter(artist => listenerGenres.includes(artist.genre))
    .map(listenerArtist => listenerArtist.name);
};

const getListenerReleases = (listenersArray, artistsArray, releasesArray, listenerName) => {
  const listenerGenres = listenersArray.find(listener => listener.name === listenerName)
    .genres;
  const listenerReleaseIds = artistsArray
    .filter(artist => listenerGenres.includes(artist.genre))
    .flatMap(listenerArtist => listenerArtist.releaseIds);

    return releasesArray
    .filter(release => listenerReleaseIds.includes(release.id))
    .map(release => release.name);
};

const getAllListenerArtistsAndReleases = (listenersArray, artistsArray, releasesArray) => {
  const allListenersArray = []
  getListenersProp(listenersArray, 'name').forEach(listener => {
    let listenerObj = {
      name: listener,
      artistsNames: getListenerArtists(listenersArray, artistsArray, listener),
      releaseNames: getListenerReleases(listenersArray, artistsArray, releasesArray, listener)
    }
    allListenersArray.push(listenerObj)
  });
  return allListenersArray
}

module.exports = {
  getListenersProp,
  getListenersAndGenres,
  getArtistsNamesByGenre,
  getReleaseIds,
  getArtistReleaseNames,
  getListenerArtists,
  getListenerReleases,
  getAllListenerArtistsAndReleases
};
