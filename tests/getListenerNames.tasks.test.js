// Module Imports
const getListenerNames = require('../tasks').getListenerNames

test('should display the names of all the listeners', () => {
    // Arrange
    const expected = ['Debora', 'Jono', 'Stina']
    const listeners = [{ name: 'Debora' }, { name: 'Jono' }, { name: 'Stina' }]
    // Act
    const actual = getListenerNames(listeners)
    // Assert
    expect(actual).toEqual(expected)
});
