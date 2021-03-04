const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0df64d7391c0da88ac47bfa0743e8659&query=' + lat + ',' + long + '&units=m'
    
    request({ url, json: true }, (error, { body }) => {
        if(error) {
            console.log('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            console.log('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". The temperature is " + body.current.temperature + " degrees. It feels like " + body.current.feelslike + " degrees out.")
        }
    })
    
}

module.exports = forecast


// const url = 'http://api.weatherstack.com/current?access_key=0df64d7391c0da88ac47bfa0743e8659&query=&units=f'

// request({ url: url, json: true }, (error, response) => {
//     // const data = JSON.parse(response.body)
//     if(error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + ". The temperatur is " + response.body.current.temperature + " degrees. It feels like " + response.body.current.feelslike + " degrees out.")
//     }
    
// })