// DEPENDENCIES
const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    // url to send request to
    const url = `http://api.weatherstack.com/current?access_key=76d4262f3cad2ae3626ee18201185b27&query=${latitude},${longitude}&units=f`

    // request to options object and callback function
    request ({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to find coordinates', undefined)
        } else {
            callback(undefined, `It is currently ${body.current.temperature}° degrees out and ${body.current.weather_descriptions}. It feels like ${body.current.feelslike} °degrees out.`)
        }
    })
}

module.exports = forecast
