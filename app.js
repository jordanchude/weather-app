// DEPENDENCIES
const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=76d4262f3cad2ae3626ee18201185b27&query=37.8267,-122.4233&units=f'

// request to api
// first argument is the url to get data from
// second argument is function to run

// parse json in request and set to request body
request({ url: url, json: true }, (error, response) => {
    console.log(`It is currently ${response.body.current.temperature}° degrees out. It feels like ${response.body.current.feelslike}° degrees out.`);
});