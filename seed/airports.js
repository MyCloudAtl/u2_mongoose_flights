const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const airports = [
    {
        name: 'Washington International',
        location: `Portland, WA`,
        code: `WI7890`
    },
    {
        name: 'Florida International' ,
        location: `Miami, FL`,
        code: `FI5678`
    },
    {
        name: 'Seattle International',
        location: `Seattle, GA`,
        code: `SI3456`
    },
    {
        name: 'Jackson International',
        location: `Atlanta, GA`,
        code: `JI1234`
    }
  ]
 

  await Airport.insertMany(airports)

  console.log('Created airports!')
}

const run = async () => {

  await main()

  db.close()
}

run()