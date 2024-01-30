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

type Detail = {
  fare: number
  distance: number
  waitingTime: number
}

const plainTextInvoice = (details: Detail[]): string => {
  let result = 'Invoice:' + '\n'
  const rideFare = details.map((info) => {
    return `	Ride Fare: ฿${info.fare.toFixed(
      2
    )} for Distance: ${info.distance.toFixed(1)} km, Waiting Time: ${
      info.waitingTime
    } minutes`
  })

  result += rideFare.join('\n') + '\n'
  const numberOfRides = details.length
  const totalFare = details.reduce((acc, cur) => acc + cur.fare, 0)
  const averageFarePerRide = totalFare / numberOfRides

  result += 'Total Number of Rides: ' + numberOfRides + '\n'
  result += 'Total Fare: ฿' + totalFare.toFixed(2) + '\n'
  result += 'Average Fare Per Ride: ฿' + averageFarePerRide.toFixed(2) + '\n'
  return result
}

/*
<h2>Invoice:</h2>
<ul>
	<li>Ride Fare: ฿70.00 for Distance: 15.0 km, Waiting Time: 10 minutes</li>
	<li>Ride Fare: ฿35.00 for Distance: 7.0 km, Waiting Time: 5 minutes</li>
	<li>Ride Fare: ฿40.00 for Distance: 8.5 km, Waiting Time: 6 minutes</li>
</ul>
<p>Total Number of Rides: 3</p>
<p>Total Fare: ฿145.00</p>
<p>Average Fare Per Ride: ฿48.33</p>
*/
const htmlInvoice = (details: Detail[]): string => {
  let result = '<h2>Invoice:</h2>\n<ul>\n'
  details.forEach((info) => {
    result += `	<li>Ride Fare: ฿${info.fare.toFixed(
      2
    )} for Distance: ${info.distance.toFixed(1)} km, Waiting Time: ${
      info.waitingTime
    } minutes</li>\n`
  })
  result += '</ul>\n'
  const numberOfRides = details.length
  const totalFare = details.reduce((acc, cur) => acc + cur.fare, 0)
  const averageFarePerRide = totalFare / numberOfRides

  result += '<p>Total Number of Rides: ' + numberOfRides + '</p>\n'
  result += '<p>Total Fare: ฿' + totalFare.toFixed(2) + '</p>\n'
  result +=
    '<p>Average Fare Per Ride: ฿' + averageFarePerRide.toFixed(2) + '</p>\n'
  return result
}

const fareOf = (rides: Ride[]): Detail[] => {
  return rides.map((ride) => {
    const distance = roundUpDistance(ride.distance)
    const waitingTime = roundUpWaitingTime(ride.waitingTime)
    const fare = 4 * distance + waitingTime

    return {
      fare: minimumFare(fare),
      distance,
      waitingTime,
    }
  })
}

function generateInvoice(rides: Ride[] = []): string {
  const details: Detail[] = fareOf(rides)

  return plainTextInvoice(details)
}

export {generateInvoice, Ride, htmlInvoice, Detail}
