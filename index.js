const listeners = require("./data/listeners");
const artists = require("./data/artists");
const releases = require("./data/releases");
const tasks = require("./tasks");

const displayListenersNames = () => {
  const listenersNames = tasks.getListenersProp(listeners, "name");
  console.log("The names of the listeners are: ");
  listenersNames.forEach(name => {
    console.log(`${name}`);
  });
  console.log();
};

const displayListenersNamesAndGenres = () => {
  const listenersNamesAndGenres = tasks.getListenersAndGenres(listeners);
  console.log("The listeners and their genres are: ");
  listenersNamesAndGenres.forEach(obj => {
    console.log(`${obj.name} likes ${obj.genres.join(" and ")}`);
  });
  console.log();
};

const displayNamesOfPopArtists = () => {
  const popArtists = tasks.getArtistsNamesByGenre(artists, "pop");
  console.log("The Pop artists are: ");
  popArtists.forEach(name => {
    console.log(`${name}`);
  });
  console.log();
};

const displayIdsRapAndTrap = () => {
  const releaseIdsRap = tasks.getReleaseIds(artists, "rap");
  const releaseIdsTrap = tasks.getReleaseIds(artists, "trap");
  console.log('Release IDs:')
  console.log(`The release IDs for Rap are ${releaseIdsRap.join(" and ")}`);
  console.log(`The release IDs for Trap are ${releaseIdsTrap.join(" and ")}`);
  console.log();
};

const displayQueenReleases = () => {
  const queenReleases = tasks.getArtistReleaseNames(artists, releases, 'Queen');
  console.log("The names of Queen's releases are: ");
  queenReleases.forEach(release => {
    console.log(`${release}`);
  });
  console.log();
};

const displayDebrasArtists = () => {
  const debrasArtists = tasks.getListenerArtists(listeners, artists, 'Debra');
  console.log("The artists that match Debra's genres are: ");
  debrasArtists.forEach(artist => {
    console.log(`${artist}`);
  });
  console.log();
};

const displayJonosReleases = () => {
  const jonosReleases = tasks.getListenerReleases(listeners, artists, releases, 'Jono');
  console.log("The releases that match Jono's genres are: ");
  jonosReleases.forEach(release => {
    console.log(`${release}`);
  });
  console.log();
};

const displayAllArtistsAndReleases = () => {
  const allReleasesAndArtists = tasks.getAllListenerArtistsAndReleases(listeners, artists, releases);
  allReleasesAndArtists.forEach(obj => {
    console.log(`The artists and releases for ${obj.name} are:`);
    console.log(`Artists: ${obj.artistsNames.join(', ')}`);
    console.log(`Releases: ${obj.releaseNames.join(', ')}`);
    console.log('')
  });
  console.log();
};

displayListenersNames();
displayListenersNamesAndGenres();
displayNamesOfPopArtists();
displayIdsRapAndTrap();
displayQueenReleases()
displayDebrasArtists()
displayJonosReleases()
displayAllArtistsAndReleases()