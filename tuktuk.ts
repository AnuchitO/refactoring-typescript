function tuktuk(a: number, b: number): number {
  return a + b
}

export const calculateFare = (
  distance: number,
  waitingTime: number
): number => {
  return 4 * distance + waitingTime
}

export const roundDistance = (distance: number): number => {
  return 0.5
}

export default tuktuk
