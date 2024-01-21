const {demo} = require('./demo')

describe('demo JavaScript', () => {
  test('JavaScript 1 + 2 to equal 3', () => {
    expect(demo(1, 2)).toBe(3)
  })
})
