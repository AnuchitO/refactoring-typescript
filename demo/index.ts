// Example usage

import {Ride, generateInvoice} from './invoice'

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
