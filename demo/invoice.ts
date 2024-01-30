type Ride = {
  distance: number
  waitingTime: number
}

function generateInvoice(rides: Ride[]): string {
  let totalFare = 0
  let totalRides = 0
  let result = ''
  result += 'Invoice:' + '\n'
  for (const ride of rides) {
    const roundedDistance = Math.ceil(ride.distance * 2) / 2
    const roundedWaitingTime = Math.ceil(ride.waitingTime)

    const fare = 4 * roundedDistance + roundedWaitingTime
    const minimumFare = fare < 35 ? 35 : fare

    totalFare += minimumFare
    totalRides += 1

    result +=
      `	Ride Fare: ฿${minimumFare.toFixed(
        2
      )} for Distance: ${roundedDistance.toFixed(
        1
      )} km, Waiting Time: ${roundedWaitingTime} minutes` + '\n'
  }

  const averageFarePerRide = totalFare / totalRides

  result += 'Total Number of Rides: ' + totalRides + '\n'
  result += 'Total Fare: ฿' + totalFare.toFixed(2) + '\n'
  result += 'Average Fare Per Ride: ฿' + averageFarePerRide.toFixed(2) + '\n'
  return result
}

export {generateInvoice, Ride}
