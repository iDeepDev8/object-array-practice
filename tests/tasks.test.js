const Tasks = require('../tasks')

test('tests are cool', () => {
    expect(true).toBeTruthy()
});

test('should display the names of all the listeners', () => {
    // Arrange
    const expected = ['Debora', 'Jono', 'Stina']
    const listeners = [{ name: 'Debora' }, { name: 'Jono' }, { name: 'Stina' }]
    // Act
    const actual = Tasks.displayListenerNames(listeners)
    // Assert
    expect(actual).toBe(expected)
});

test('should display the listeners and their genres ', () => {
    // Arrange
    const expected = [{ name: 'Debora', genres: ['trap', 'bop'] }, { name: 'Jono', genres: ['trance', 'techno'] }, { name: 'Stina', genres: ['jazz', 'rnb', 'mumble'] }]
    const listeners = [{ name: 'Debora', genres: ['trap', 'bop'], age: 23 }, { name: 'Jono', genres: ['trance', 'techno'], age: 25 }, { name: 'Stina', genres: ['jazz', 'rnb', 'mumble'], age: 19 }]
    // Act
    const actual = Tasks.displayListenerGenres(listeners)
    // Assert
    expect(actual).toBe(expected)
});

test('should display the name of the pop artists ', () => {
    // Arrange
    const expected = ['Rihana', 'Kanye', 'Knifeparty']
    const artists = [{ name: 'Rihana', genre: 'pop' }, { name: 'Kanye', genre: 'rap' }, { name: 'Knifeparty', genre: 'trap' }]
    // Act
    const actual = Tasks.getArtistNames(artists, ['pop'])
    // Assert
    expect(actual).toBe(expected)
});

test('should display the IDs of the rap and trap artists', () => {
    // Arrange
    const expected = [2, 3]
    const listeners = [{ id: 1, name: 'Rihana', genre: 'rnb' }, { id: 2, name: 'Kanye', genre: 'rap' }, { id: 3, name: 'Knifeparty', genre: 'trap' }]
    // Act
    const actual = Tasks.getArtistIDs(listeners, ['rap', 'trap'])
    // Assert
    expect(actual).toBe(expected)
});

test('should display the artist names of Listeners\'s genres', () => {
    // Arrange
    const expected = ['Knifeparty']
    const genres = ['trap', 'bop']
    // Act
    const actual = Tasks.getArtistNames(artists, ['pop'])
    // Assert
    expect(actual).toBe(expected)
});

// test('should display artists and release names of all the listners', () => {
//     // Arrange
//     const expected = ['Knifeparty']
//     const genres = ['trap', 'bop']
//     // Act
//     const actual = Tasks.getArtistNames(artists, ['pop'])
//     // Assert
//     expect(actual).toBe(expected)
// });