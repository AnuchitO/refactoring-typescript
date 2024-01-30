type Ride = {
  distance: number
  waitingTime: number
}

const roundUpDistance = (distance: number): number => {
  return Math.ceil(distance * 2) / 2
}

const roundUpWaitingTime = (waitingTime: number): number => {
  return Math.ceil(waitingTime)
}

const minimumFare = (fare: number): number => {
  return fare < 35 ? 35 : fare
}

function generateInvoice(rides: Ride[] = []): string {
  let totalFare = 0
  let result = ''
  result += 'Invoice:' + '\n'
  for (const ride of rides) {
    const fare =
      4 * roundUpDistance(ride.distance) + roundUpWaitingTime(ride.waitingTime)
    totalFare += minimumFare(fare)

    result +=
      `	Ride Fare: ฿${minimumFare(fare).toFixed(
        2
      )} for Distance: ${roundUpDistance(ride.distance).toFixed(
        1
      )} km, Waiting Time: ${roundUpWaitingTime(ride.waitingTime)} minutes` +
      '\n'
  }

  const averageFarePerRide = totalFare / rides.length

  result += 'Total Number of Rides: ' + rides.length + '\n'
  result += 'Total Fare: ฿' + totalFare.toFixed(2) + '\n'
  result += 'Average Fare Per Ride: ฿' + averageFarePerRide.toFixed(2) + '\n'
  return result
}

export {generateInvoice, Ride}
