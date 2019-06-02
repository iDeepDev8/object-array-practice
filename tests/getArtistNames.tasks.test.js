// Module Imports
const getArtistNames = require('../tasks').getArtistNames

test('should display the name of the pop artists ', () => {
    // Arrange
    const expected = ['Rihana']
    const artists = [{ name: 'Rihana', genre: 'pop' }, { name: 'Kanye', genre: 'rap' }, { name: 'Knifeparty', genre: 'trap' }]
    // Act
    const actual = getArtistNames(artists, ['pop'])
    // Assert
    expect(actual).toEqual(expected)
});

test('should display the artist names of Listeners\'s genres', () => {
    // Arrange
    const expected = ['Knifeparty']
    const genres = ['trap', 'bop']
    const artists = [{ name: 'Rihana', genre: 'pop' }, { name: 'Kanye', genre: 'rap' }, { name: 'Knifeparty', genre: 'trap' }]

    // Act
    const actual = getArtistNames(artists, genres)
    // Assert
    expect(actual).toEqual(expected)
});
