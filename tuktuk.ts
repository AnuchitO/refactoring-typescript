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
  return Math.ceil(distance * 2) / 2
}

export const roundWaitingTime = (waitingTime: number): number => {
  return Math.ceil(waitingTime)
}

export const fare = (distance: number, waitingTime: number): number => {
  return calculateFare(roundDistance(distance), roundWaitingTime(waitingTime))
}

export const adjustedMinimumFare = (fare: number): number => {
  return Math.max(fare, 35)
}

type Ride = {
  distance: number
  waitingTime: number
}

export const ride = (r: Ride): number => {
  return adjustedMinimumFare(fare(r.distance, r.waitingTime))
}

export const rides = (rs: Ride[]): number => {
  return rs.reduce((acc, r) => acc + ride(r), 0)
}

type Invoice = {
  totalNumberOfRides: number
  totalFare: number
  averageFarePerRide: number
}
export const tuktukInvoice = (rs: Ride[]): Invoice => {
  const totalNumberOfRides = rs.length
  const totalFare = rides(rs)
  const averageFarePerRide = totalFare / totalNumberOfRides

  return {
    totalNumberOfRides,
    totalFare,
    averageFarePerRide,
  }
}

export default tuktuk
