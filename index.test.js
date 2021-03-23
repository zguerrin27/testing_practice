const supertest = require('supertest');
const {sum, getData, getData2} = require('./index')

const firstToDo = { userId: 1, id: 1, title: 'delectus aut autem', completed: false };
const secondToDo = { userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false };

test('should return the 1st todo', async () => {
  const data = await getData()
  expect(data).toEqual(firstToDo)
})

test('should return the 2nd todo', async () => {
  const data = await getData2()
  expect(data).toEqual(secondToDo)
})

test('adding 1 + 2 = 3', () => {
  expect(sum(1,2)).toBe(3);
})

test('adding multiple params gets total', () => {
  expect(sum(1,2,3)).toBe(6)
})