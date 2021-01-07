// DEPENDENCIES
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// GLOBAL VARIABLES
const address = process.argv[2];

if (!address) {
  console.log("Please enter a location.")
} else {
  // chained callback
  geocode(address, (error, data) => {
    // if error, stop function
    if (error) {
      return console.log(error)
    }
    
      forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
          return console.log(error)
        }

        console.log(data.location)
        console.log(forecastData)
    })
  })
}