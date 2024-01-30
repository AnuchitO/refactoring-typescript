import {Detail, generateInvoice, htmlInvoice, invoiceOf, Ride} from './invoice'

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

  describe('htmlInvoice', () => {
    it('should generate html invoice for 1 ride', () => {
      const details: Detail[] = [
        {fare: 70, distance: 15, waitingTime: 10},
        {fare: 35, distance: 7, waitingTime: 5},
        {fare: 40, distance: 8.5, waitingTime: 6},
      ]
      const invoice = htmlInvoice(details)

      const want = `<h2>Invoice:</h2>
<ul>
	<li>Ride Fare: ฿70.00 for Distance: 15.0 km, Waiting Time: 10 minutes</li>
	<li>Ride Fare: ฿35.00 for Distance: 7.0 km, Waiting Time: 5 minutes</li>
	<li>Ride Fare: ฿40.00 for Distance: 8.5 km, Waiting Time: 6 minutes</li>
</ul>
<p>Total Number of Rides: 3</p>
<p>Total Fare: ฿145.00</p>
<p>Average Fare Per Ride: ฿48.33</p>
`
      expect(invoice).toEqual(want)
    })
  })

  describe('invoiceOf', () => {
    it('should generate invoice for 1 ride in plain text', () => {
      const rides: Ride[] = [{distance: 15, waitingTime: 10}]

      const invoice = invoiceOf(rides)

      const want = `Invoice:
	Ride Fare: ฿70.00 for Distance: 15.0 km, Waiting Time: 10 minutes
Total Number of Rides: 1
Total Fare: ฿70.00
Average Fare Per Ride: ฿70.00
`
      expect(invoice).toEqual(want)
    })

    it('should generate invoice for 1 ride in html', () => {
      const rides: Ride[] = [{distance: 15, waitingTime: 10}]

      const invoice = invoiceOf(rides, 'html')

      const want = `<h2>Invoice:</h2>
<ul>
	<li>Ride Fare: ฿70.00 for Distance: 15.0 km, Waiting Time: 10 minutes</li>
</ul>
<p>Total Number of Rides: 1</p>
<p>Total Fare: ฿70.00</p>
<p>Average Fare Per Ride: ฿70.00</p>
`
      expect(invoice).toEqual(want)
    })
  })
})
