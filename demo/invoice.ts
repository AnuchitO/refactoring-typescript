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

const plainTextInvoice = (details: any[], rides: Ride[] = []): string => {
  let result = 'Invoice:' + '\n'
  const rideFare = details.map((info) => {
    return `	Ride Fare: ฿${info.fare.toFixed(
      2
    )} for Distance: ${info.distance.toFixed(1)} km, Waiting Time: ${
      info.waitingTime
    } minutes`
  })

  result += rideFare.join('\n') + '\n'

  const totalFare = details.reduce((acc, cur) => acc + cur.fare, 0)
  const averageFarePerRide = totalFare / rides.length

  result += 'Total Number of Rides: ' + rides.length + '\n'
  result += 'Total Fare: ฿' + totalFare.toFixed(2) + '\n'
  result += 'Average Fare Per Ride: ฿' + averageFarePerRide.toFixed(2) + '\n'
  return result
}

function generateInvoice(rides: Ride[] = []): string {
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

  return plainTextInvoice(details, rides)
}

export {generateInvoice, Ride}
