type Ride = {
  distance: number
  waitingTime: number
}

function generateInvoice(rides: Ride[]): void {
  let totalFare = 0,
    totalRides = 0,
    totalWaitingTime = 0
  console.log('Invoice:')
  for (const ride of rides) {
    const roundedDistance = Math.ceil(ride.distance * 2) / 2
    const roundedWaitingTime = Math.ceil(ride.waitingTime)

    const fare = 4 * roundedDistance + roundedWaitingTime
    const minimumFare = fare < 35 ? 35 : fare

    totalFare += minimumFare
    totalRides += 1
    totalWaitingTime += roundedWaitingTime

    console.log(
      `	Ride Fare: ฿${minimumFare.toFixed(
        2
      )} for Distance: ${roundedDistance} km, Waiting Time: ${roundedWaitingTime} minutes`
    )
  }

  const averageFarePerRide = totalFare / totalRides

  console.log('Total Number of Rides: ' + totalRides)
  console.log('Total Fare: ฿' + totalFare.toFixed(2))
  console.log('Average Fare Per Ride: ฿' + averageFarePerRide.toFixed(2))
}

// Example usage
const rides: Ride[] = [
  {distance: 3.5, waitingTime: 10},
  {distance: 2, waitingTime: 5},
  {distance: 4, waitingTime: 8},
]

generateInvoice(rides)
