const supertest = require('supertest');
const {sum, getData} = require('./index')

test('/ should return single todo', async () => {
  const data = await getData()
  expect(data).toEqual({ userId: 1, id: 1, title: 'delectus aut autem', completed: false })

})

test('adding 1 + 2 = 3', () => {
  expect(sum(1,2)).toBe(3);
})

test('adding multiple params gets total', () => {
  expect(sum(1,2,3)).toBe(6)
})