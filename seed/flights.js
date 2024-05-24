const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const washingtonInternational = await Airport.find({ name: 'Washington International' })
  const floridaInternational = await Airport.find({ name: 'Florida International' })
  const seattleInternational = await Airport.find({ name: 'Seattle International' })
  const jacksonInternational = await Airport.find({ name: 'Jackson International' })

  const flights = [
    {
        airline: `Spirit Airlines`,
        flightNumber: 112233,
        price: 200,
        numberOfSeats: 150,
        departingAirport: washingtonInternational[0]._id,
        arrivalAirport: seattleInternational[0]._id,
        departureDateTime: `May 5 @ 7am`,
    },
    {
        airline: `American Airlines`,
        flightNumber: 223344,
        price: 300,
        numberOfSeats: 235,
        departingAirport: seattleInternational[0]._id,
        arrivalAirport: floridaInternational[0]._id,
        departureDateTime: `May 25 @ 10am`,
    },
     {
        airline: `Norwegian Airlines`,
        flightNumber: 334455,
        price: 250,
        numberOfSeats: 200,
        departingAirport: seattleInternational[0]._id,
        arrivalAirport: washingtonInternational[0]._id,
        departureDateTime: `June 5 @ 7pm`,
    },
    {
        airline: `Delta Airlines`,
        flightNumber: 445566,
        price: 350,
        numberOfSeats: 275,
        departingAirport: washingtonInternational[0]._id,
        arrivalAirport: jacksonInternational[0]._id,
        departureDateTime: `June 15 @ 9pm`,
    },
    {
        airline: `American Airlines`,
        flightNumber: 556677,
        price: 300,
        numberOfSeats: 205,
        departingAirport: seattleInternational[0]._id,
        arrivalAirport: jacksonInternational[0]._id,
        departureDateTime: `July 1 @ 4am`,
    },
     {
        airline: `Canada Airlines`,
        flightNumber: 667788,
        price: 250,
        numberOfSeats: 225,
        departingAirport: floridaInternational[0]._id,
        arrivalAirport: washingtonInternational[0]._id,
        departureDateTime: `May 7 @ 1pm`,
    },
    {
        airline: `Delta Airlines`,
        flightNumber: 778899,
        price: 350,
        numberOfSeats: 250,
        departingAirport: washingtonInternational[0]._id,
        arrivalAirport: floridaInternational[0]._id,
        departureDateTime: `June 11 @ 4pm`,
    },
  ]

  await Flight.insertMany(flights)
  console.log('Created flights with airports!')
}
const run = async () => {
  await main()
  db.close()
}

run()