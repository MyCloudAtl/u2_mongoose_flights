const db = require('./db')
const { Flight, Airport } = require('./models')

//Find
const index = async () => {
    const flights = await Flight.find()
  const airports = await Airport.find()
  console.log(airports, flights)
}

const details = async () => {
    const flights = await Flight.findById(`664fd129106c06fed928cc64`)
    const airports = await Airport.findById(`664fd099d4c615909dfa8868`)
    console.log(flights, airports)
}

// //Create
const createFlights = async () => {
    const washingtonInternational = await Airport.find({ name: 'Washington International' })
    const floridaInternational = await Airport.find({ name: 'Florida International' })

 let flight = await Flight.create({
    airline: `Canada Airlines`,
    flightNumber: 889900,
    price: 450,
    numberOfSeats: 150,
    departingAirport: floridaInternational[0]._id,
    arrivalAirport: washingtonInternational[0]._id,
    departureDateTime: `July 4 @ 12pm`,
  })
  console.log(flight)
}

//Update
const updateDetails = async () => {
    const updatedFlights = await Flight.updateOne(
    //  {price: 350},{$set: {price: 999}},
     {price: 999}, {price: 555},
    // const updatedAirports = await Airport.updateOne(
    //  {code: `FI5678`}, {code: `FI8765`}  
  )
  console.log(updatedFlights, /*updatedAirports*/)
}

//Delete
const deleteAny = async () => {
  let deletedF = await Flight.deleteOne()
  let deletedA = await Airport.deleteOne()
  console.log(deletedF, deletedA)
}

async function main() {
  try {
        // await createFlights()
        // await details()
        // await updateDetails()
        // await index()
        // await deleteAny()
  } catch (error) {
      console.log(error)
  } finally {
      await db.close()
  }
}

main()