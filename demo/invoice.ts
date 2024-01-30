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

// Example usage
/*
Invoice:
	Ride Fare: ฿70.00 for Distance: 15.0 km, Waiting Time: 10 minutes
	Ride Fare: ฿35.00 for Distance: 7.0 km, Waiting Time: 5 minutes
	Ride Fare: ฿40.00 for Distance: 8.2 km, Waiting Time: 6 minutes
Total Number of Rides: 3
Total Fare: ฿105.00
Average Fare Per Ride: ฿35.00
*/
const rides: Ride[] = [
  {distance: 15, waitingTime: 10},
  {distance: 7, waitingTime: 5},
  {distance: 8.2, waitingTime: 6},
]

const invoice = generateInvoice(rides)
console.log(invoice)
