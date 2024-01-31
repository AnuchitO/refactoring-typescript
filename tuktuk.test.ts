import tuktuk, {calculateFare, roundDistance} from './tuktuk'

describe('demo Tuk Tuk', () => {
  it('should return total of 1km without waiting time', () => {
    const distance = 1
    const waitingTime = 0

    const result = calculateFare(distance, waitingTime)

    expect(result).toEqual(4)
  })

  it('should return total of 2km without waiting time', () => {
    const distance = 2
    const waitingTime = 0

    const result = calculateFare(distance, waitingTime)

    expect(result).toEqual(8)
  })

  it('should return total of 0km with 1m waiting time', () => {
    const distance = 0
    const waitingTime = 1

    const result = calculateFare(distance, waitingTime)

    expect(result).toEqual(1)
  })

  describe('rounding distance', () => {
    it('should round up distance to 0.5km', () => {
      const distance = 0.1

      const result = roundDistance(distance)

      expect(result).toEqual(0.5)
    })

    it('should round up distance to 0.5km', () => {
      const distance = 0.5

      const result = roundDistance(distance)

      expect(result).toEqual(0.5)
    })

    it('should round up distance to 0.6km', () => {
      const distance = 0.6

      const result = roundDistance(distance)

      expect(result).toEqual(1)
    })

    it('should round up distance to 1.0km', () => {
      const distance = 1.0

      const result = roundDistance(distance)

      expect(result).toEqual(1.0)
    })
  })
})
