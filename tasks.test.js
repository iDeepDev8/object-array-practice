const tasks = require('./tasks')

test('Test setup working', () => {
  expect(true).toBeTruthy()
})

test('Displays names of all listeners', () => {
// ARRANGE
  const names = [
    { name: 'Frodo' },
    { name: 'Gandalf' },
    { name: 'Aragorn' }
  ]

  const expected = 'Frodo, Gandalf, Aragorn'

  // ACT
  const actual = tasks.displayNames(names)

  // ASSERT
  expect(actual).toBe(expected)
})

// ARRANGE
// ACT
// ASSERT
