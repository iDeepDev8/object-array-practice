// Module Imports
const getListenerGenres = require('../tasks').getListenerGenres

test('should display the listeners and their genres ', () => {
    // Arrange
    const expected = [{ name: 'Debora', genres: ['trap', 'bop'] }, { name: 'Jono', genres: ['trance', 'techno'] }, { name: 'Stina', genres: ['jazz', 'rnb', 'mumble'] }]
    const listeners = [{ name: 'Debora', genres: ['trap', 'bop'], age: 23 }, { name: 'Jono', genres: ['trance', 'techno'], age: 25 }, { name: 'Stina', genres: ['jazz', 'rnb', 'mumble'], age: 19 }]
    // Act
    const actual = getListenerGenres(listeners)
    // Assert
    expect(actual).toEqual(expected)
});