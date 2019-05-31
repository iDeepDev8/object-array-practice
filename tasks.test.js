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

test('Displays the listeners and their genres', () => {
  const listeners = [
    { name: 'Frodo',
      genres: ['k-pop', 'hip hop']
    },
    { name: 'Gandalf',
      genres: ['country', 'rock']
    },
    { name: 'Aragorn',
      genres: ['soul', 'reggae']
    }
  ]

  const expected = {
    Frodo: ['k-pop', 'hip hop'],
    Gandalf: ['country', 'rock'],
    Aragorn: ['soul', 'reggae']
  }

  const actual = tasks.displayGenres(listeners)

  expect(actual).toStrictEqual(expected)
})
