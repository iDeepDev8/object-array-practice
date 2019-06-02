const listeners = require("./data/listeners");
const artists = require("./data/artists");
const releases = require("./data/releases");
const tasks = require("./tasks");

test("Test platform not broken!", () => {
  expect(true).toBeTruthy();
});

test("Display all listeners names", () => {
  const actual = tasks.getListenersProp(listeners, 'name');
  const expected = ["Debra", "Jono", "Stina"];

  expect(actual).toEqual(expected);
});

test("Display listeners and their genres", () => {
  const actual = tasks.getListenersAndGenres(listeners);
  const expected = [
    {
      name: "Debra",
      genres: ["pop", "chill"]
    },
    {
      name: "Jono",
      genres: ["rap", "trap"]
    },
    {
      name: "Stina",
      genres: ["folk", "trance"]
    }
  ];

  expect(actual).toEqual(expected);
});

test("Display all pop artists names", () => {
  const actual = tasks.getArtistsNamesByGenre(artists, 'pop');
  const expected = ["Queen", "The Beatles"];

  expect(actual).toEqual(expected);
});

test("Display release IDs of rap and trap artists", () => {

  const genresToTest = ['rap', 'trap']

  genresToTest.forEach(genre => {
    const actual = tasks.getReleaseIds(artists, genre);
    let expected = ''
    if (genre === 'rap') expected = [6, 7];
    if (genre === 'trap') expected = [8, 9];
    expect(actual).toEqual(expected);
  });

});

test("Display Queens release names", () => {
  const actual = tasks.getArtistReleaseNames(artists, releases, "Queen");
  const expected = ["Flash Gordon", "A Kind of Magic", "Innuendo"];

  expect(actual).toEqual(expected);
});

test("Display artist names of Debras genres", () => {
  const actual = tasks.getListenerArtists(listeners, artists, "Debra");
  const expected = ["Queen", "Thievery Corporation", "The Beatles"];

  expect(actual).toEqual(expected);
});

test("Display release names of Jonos genres", () => {
  const actual = tasks.getListenerReleases(
    listeners,
    artists,
    releases,
    "Jono"
  );
  const expected = [
    "Phrenology",
    "The Tipping Point",
    "Harlem Shake",
    "Dum Dum"
  ];

  expect(actual).toEqual(expected);
});

test("Display the artist and release names of all of the listeners", () => {
  const actual = tasks.getAllListenerArtistsAndReleases(
    listeners,
    artists,
    releases
  );
  const expected = [
    {
      name: "Debra",
      artistsNames: ["Queen", "Thievery Corporation", "The Beatles"],
      releaseNames: [
        "Flash Gordon",
        "A Kind of Magic",
        "Innuendo",
        "The Richest Man in Babylon",
        "The Mirror Conspiracy",
        'Abbey Road',
        "Sgt. Pepper's Lonely Hearts Club Band"
      ]
    },
    {
      name: "Jono",
      artistsNames: ["The Roots", "Baauer"],
      releaseNames: [
        "Phrenology",
        "The Tipping Point",
        "Harlem Shake",
        "Dum Dum"
      ]
    },
    {
      name: "Stina",
      artistsNames: ['Iron & Wine', 'Armin van Buuren'],
      releaseNames: [
        "The Shepherd's Dog",
        'Our Endless Numbered Days',
        'Imagine',
        'This is What it Feels Like'
      ]
    }
  ];

  expect(actual).toEqual(expected);
});
