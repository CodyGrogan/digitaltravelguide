var express = require('express');
var router = express.Router();
var path = require('path');
const apikey = process.env.WEATHERAPI;



router.get('/weather', async function(req, res){
    console.log('getting weather');
    let weather = await checkWeather();
    res.json(weather);
    
    
});


router.get('*', function(req, res) {

    console.log("received *");
    
    let pathstring = (path.join(__dirname, '../build/index.html' ));
    console.log(pathstring);
    res.sendFile(pathstring);
  });


async function checkWeather(){
    // api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid={API key}
    var axios = require("axios").default;
     let weather;
    var options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
      params: {
        q: 'taipei',
        cnt: '16',
        units: 'metric'
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': apikey
      }
    };
    
     await axios.request(options).then(function (response) {
        weather = response.data;
       return weather;
  
       
    }).catch(function (error) {
       console.error(error);
       weather = null
       return weather;
    });
    return weather;
   }

  module.exports = router;