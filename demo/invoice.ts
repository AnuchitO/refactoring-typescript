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
  let result = ''
  result += 'Invoice:' + '\n'

  const details = rides.map((ride) => {
    const distance = roundUpDistance(ride.distance)
    const waitingTime = roundUpWaitingTime(ride.waitingTime)
    const fare = 4 * distance + waitingTime

    return {
      fare: minimumFare(fare),
      distance,
      waitingTime,
    }
  })

  for (const info of details) {
    result +=
      `	Ride Fare: ฿${info.fare.toFixed(
        2
      )} for Distance: ${info.distance.toFixed(1)} km, Waiting Time: ${
        info.waitingTime
      } minutes` + '\n'
  }
  const totalFare = details.reduce((acc, cur) => acc + cur.fare, 0)
  const averageFarePerRide = totalFare / rides.length

  result += 'Total Number of Rides: ' + rides.length + '\n'
  result += 'Total Fare: ฿' + totalFare.toFixed(2) + '\n'
  result += 'Average Fare Per Ride: ฿' + averageFarePerRide.toFixed(2) + '\n'
  return result
}

export {generateInvoice, Ride}
