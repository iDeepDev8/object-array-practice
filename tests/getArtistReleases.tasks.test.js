// Import Modules
const getArtistReleases = require('../tasks').getArtistReleases

test('should display the names of the releases by Queen',  () => {
    // Arrange
    const artistId = 1;
    const releases = [{ id: 1, artistId: 1, name: 'Night at the Opera', genre: 'Rock', year: 1975 }, { id: 2, artistId: 2, name: 'Mirage', genre: 'Trance', year: 2010 }]
    const expected = ['Night at the Opera']
    // Act
    const actual = getArtistReleases(artistId, releases)
    // Assert
    expect(actual).toEqual(expected)
});