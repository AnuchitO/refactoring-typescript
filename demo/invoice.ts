type Ride = {
  distance: number
  waitingTime: number
}

const roundUpDistance = (distance: number): number => {
  return Math.ceil(distance * 2) / 2
}

function generateInvoice(rides: Ride[] = []): string {
  let totalFare = 0
  let result = ''
  result += 'Invoice:' + '\n'
  for (const ride of rides) {
    const roundedDistance = roundUpDistance(ride.distance)
    const roundedWaitingTime = Math.ceil(ride.waitingTime)

    const fare = 4 * roundedDistance + roundedWaitingTime
    const minimumFare = fare < 35 ? 35 : fare

    totalFare += minimumFare

    result +=
      `	Ride Fare: ฿${minimumFare.toFixed(
        2
      )} for Distance: ${roundedDistance.toFixed(
        1
      )} km, Waiting Time: ${roundedWaitingTime} minutes` + '\n'
  }

  const averageFarePerRide = totalFare / rides.length

  result += 'Total Number of Rides: ' + rides.length + '\n'
  result += 'Total Fare: ฿' + totalFare.toFixed(2) + '\n'
  result += 'Average Fare Per Ride: ฿' + averageFarePerRide.toFixed(2) + '\n'
  return result
}

export {generateInvoice, Ride}
