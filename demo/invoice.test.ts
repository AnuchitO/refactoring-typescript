import {generateInvoice, Ride} from './invoice'

describe('Invoice', () => {
  it('should generate invoice for 1 ride', () => {
    const rides: Ride[] = [{distance: 15, waitingTime: 10}]

    const invoice = generateInvoice(rides)

    const want = `Invoice:
	Ride Fare: ฿70.00 for Distance: 15.0 km, Waiting Time: 10 minutes
Total Number of Rides: 1
Total Fare: ฿70.00
Average Fare Per Ride: ฿70.00
`
    expect(invoice).toEqual(want)
  })

  it('should generate invoice for 2 rides', () => {
    const rides: Ride[] = [
      {distance: 15, waitingTime: 10},
      {distance: 7, waitingTime: 5},
    ]

    const invoice = generateInvoice(rides)

    const want = `Invoice:
	Ride Fare: ฿70.00 for Distance: 15.0 km, Waiting Time: 10 minutes
	Ride Fare: ฿35.00 for Distance: 7.0 km, Waiting Time: 5 minutes
Total Number of Rides: 2
Total Fare: ฿105.00
Average Fare Per Ride: ฿52.50
`
    expect(invoice).toEqual(want)
  })

  it('should generate invoice for 3 rides', () => {
    const rides: Ride[] = [
      {distance: 15, waitingTime: 10},
      {distance: 7, waitingTime: 5},
      {distance: 8.2, waitingTime: 6},
    ]

    const invoice = generateInvoice(rides)

    const want = `Invoice:
	Ride Fare: ฿70.00 for Distance: 15.0 km, Waiting Time: 10 minutes
	Ride Fare: ฿35.00 for Distance: 7.0 km, Waiting Time: 5 minutes
	Ride Fare: ฿40.00 for Distance: 8.5 km, Waiting Time: 6 minutes
Total Number of Rides: 3
Total Fare: ฿145.00
Average Fare Per Ride: ฿48.33
`
    expect(invoice).toEqual(want)
  })
})
