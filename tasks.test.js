const tasks = require('./tasks')

test('test setup is working', () => {
  expect(true).toBeTruthy()
})

test('Display the names of all the listeners', () => {
  // arrange
  const listeners = [
    { name: 'Debra' },
    { name: 'Jono' },
    { name: 'Stina' }
  ]
  // act
  const expected = ['Debra,', 'Jono', 'Stina']
  const actual = tasks.displayNames(listeners)
  // assert
  expect(actual).toBe(expected)
})
