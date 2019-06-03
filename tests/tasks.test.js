const tasks = require('../tasks.js')

test('Tests are working', () => {
    expect(true).toBeTruthy()
})

test('getListenerNames should return all the names of the listeners', () => {
    //arrange
    const listeners = [
        {name: 'jock', age: 12},
        {name: 'jan'},
        {name: 'just'},
        {notName: 'work it'}
    ]
    const expected = 'jock, jan, just'
    
    //act
    const actual = tasks.getListenerNames(listeners)

    //assert
    expect(actual).toBe(expected)
})