// DEPENDENCIES
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// GLOBAL VARIABLES
const address = process.argv[2];

if (!address) {
  console.log("Please enter a location.")
} else {
  // chained callback
  // Default parameter for latitude, longitude, and location is de-structured from an empty object, making them all undefined
  geocode(address, (error, {latitude, longitude, location} = {}) => {
    // if error, stop function
    if (error) {
      return console.log(error)
    }
    
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return console.log(error)
        }

        console.log(location)
        console.log(forecastData)
    })
  })
}