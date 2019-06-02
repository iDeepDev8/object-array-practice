const listeners = require("./data/listeners");
const artists = require("./data/artists");
const releases = require("./data/releases");

const displayListenersNames = listenersArray => {
  return listenersArray.map(listener => listener.name);
};

const displayListenersAndGenres = listenersArray => {
  return listenersArray.map(listener => {
    let newListener = {};
    newListener.name = listener.name;
    newListener.genres = listener.genres;
    return newListener;
  });
};

const displayPopArtistsNames = artistsArray => {
  return artistsArray
    .filter(artist => artist.genre === "pop")
    .map(popArtist => popArtist.name);
};

const displayRapAndTrapIds = artistsArray => {
  return artistsArray
    .filter(artist => artist.genre === "rap" || artist.genre === "trap")
    .map(rapAndTrapArtist => rapAndTrapArtist.releaseIds);
};

const displayQueenReleaseNames = (artistsArray, releasesArray) => {
  const queenReleaseIds = artistsArray.find(artist => artist.name === "Queen")
    .releaseIds;
  return releasesArray
    .filter(release => queenReleaseIds.includes(release.id))
    .map(release => release.name);
};

const displayDebrasArtists = (listenersArray, artistsArray) => {
  const debrasGenres = listeners.find(listener => listener.name === "Debra")
    .genres;
  return artistsArray
    .filter(artist => debrasGenres.includes(artist.genre))
    .map(debrasArtist => debrasArtist.name);
};

module.exports = {
  displayListenersNames,
  displayListenersAndGenres,
  displayPopArtistsNames,
  displayRapAndTrapIds,
  displayQueenReleaseNames,
  displayDebrasArtists
};
