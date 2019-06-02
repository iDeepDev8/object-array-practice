// Import Modules
const getArtistIDs = require('../tasks').getArtistIDs

test('should display the IDs of the rap and trap artists', () => {
    // Arrange
    const expected = [2, 3]
    const listeners = [{ id: 1, name: 'Rihana', genre: 'rnb' }, { id: 2, name: 'Kanye', genre: 'rap' }, { id: 3, name: 'Knifeparty', genre: 'trap' }]
    // Act
    const actual = getArtistIDs(listeners, ['rap', 'trap'])
    // Assert
    expect(actual).toEqual(expected)
});