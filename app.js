// DEPENDENCIES
const request = require('postman-request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const url = 'http://api.weatherstack.com/current?access_key=76d4262f3cad2ae3626ee18201185b27&query=37.8267,-122.4233&units=f'

// request to api
// first argument is the url to get data from
// second argument is function to run

// parse json in request and set to request body
// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log(`${error}`);
//     } else if (response.body.error) {
//         console.log(`${response.body.error.info}`);
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature}° degrees out. It feels like ${response.body.current.feelslike}° degrees out.`);
//     }
// });

// Geocoding
// Address -> Lat/Long -> Weather

// limit 1 to show the top choice
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamN3aWxsaWFtczQxMCIsImEiOiJja2o3ZG05eG0xNGx2MzFueTZkZXFyeXJ0In0.d_-kzjgvIFqHzE-T2CaNtw&limit=1'

// convert geocode URL to json and test for error and response
// request({url: geocodeURL, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to find location.');
//     } else if (response.body.features.length === 0) {
//         console.log(`There is no city matching your query. Try another search.`)
//     } else {
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];

//         console.log(latitude, longitude);
//     }
// });

// geocode('Philadelphia New York', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(37.8267, -122.4233, (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data)
  })