// DEPENDENCIES
const request = require('postman-request');
const url = 'http://api.weatherstack.com/current?access_key=76d4262f3cad2ae3626ee18201185b27&query=37.8267,-122.4233'

// request to api
// first argument is the url to get data from
// second argument is function to run

request({ url: url }, (error, response) => {
    // parse JSON data
    const data = JSON.parse(response.body);
    console.log(data.current);
})