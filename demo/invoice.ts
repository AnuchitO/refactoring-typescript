type Ride = {
  distance: number
  waitingTime: number
}

function generateInvoice(rides: Ride[]): string {
  let totalFare = 0,
    totalRides = 0,
    totalWaitingTime = 0
  let result = ''
  result += 'Invoice:' + '\n'
  for (const ride of rides) {
    const roundedDistance = Math.ceil(ride.distance * 2) / 2
    const roundedWaitingTime = Math.ceil(ride.waitingTime)

    const fare = 4 * roundedDistance + roundedWaitingTime
    const minimumFare = fare < 35 ? 35 : fare

    totalFare += minimumFare
    totalRides += 1
    totalWaitingTime += roundedWaitingTime

    result +=
      `	Ride Fare: ฿${minimumFare.toFixed(
        2
      )} for Distance: ${roundedDistance} km, Waiting Time: ${roundedWaitingTime} minutes` +
      '\n'
  }

  const averageFarePerRide = totalFare / totalRides

  result += 'Total Number of Rides: ' + totalRides + '\n'
  result += 'Total Fare: ฿' + totalFare.toFixed(2) + '\n'
  result += 'Average Fare Per Ride: ฿' + averageFarePerRide.toFixed(2) + '\n'
  return result
}

// Example usage
const rides: Ride[] = [
  {distance: 3.5, waitingTime: 10},
  {distance: 2, waitingTime: 5},
  {distance: 4, waitingTime: 8},
]

const invoice = generateInvoice(rides)
console.log(invoice)
