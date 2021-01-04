// DEPENDENCIES
const request = require('postman-request');

const geocode = (address, callback) => {
    // put address into API link for request
    // encode URI component that returns a string
    // encode URI allows user to search for special characters that mean something in the address
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiamN3aWxsaWFtczQxMCIsImEiOiJja2o3ZG05eG0xNGx2MzFueTZkZXFyeXJ0In0.d_-kzjgvIFqHzE-T2CaNtw&limit=1`

    request ({ url: url, json: true }, (error, response) => {
        if (error) {
            // instead of console.log, use callback to keep flexible
            callback('Unable to connect to location services.', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                // define data as object
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode