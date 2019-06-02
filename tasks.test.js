test('test setup working', () => {
  expect(true).toBeTruthy()
})

//const artists = require('../artists')
//const releases = require('../releases')

const index = require('./index.js')
const tasks = require('./tasks.js')
const listeners = require('./data/listeners')

test('Gets the names of all the listeners', () => {
  const expected = ['Debra','Jono','Stina'] //Arrange
  
  const actual = tasks.getListeners(listeners) //Act
  
  expect(actual).toEqual(expected) //Assert
})

test('Gets the genres of all the listeners', () => {
  const expected = {Debra: ['pop', 'chill'], Jono: ['rap', 'trap'], Stina: ['folk', 'trance']} //Arrange
  
  const actual = tasks.getGenres(listeners) //Act
  
  expect(actual).toEqual(expected) //Assert
})