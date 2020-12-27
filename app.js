// DEPENDENCIES
const request = require('postman-request');

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

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamN3aWxsaWFtczQxMCIsImEiOiJja2o3ZG05eG0xNGx2MzFueTZkZXFyeXJ0In0.d_-kzjgvIFqHzE-T2CaNtw&limit=1'

request({url: geocodeURL, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to find location.');
    } else if (response.body.features.length === 0) {
        console.log(`There is no city matching your query. Try another search.`)
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];

        console.log(latitude, longitude);
    }
})