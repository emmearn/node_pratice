const { EventEmitter } = require('events');
const WeatherEmitter = require('./weather');
const weatherEmitter = new WeatherEmitter();

weatherEmitter.on('weather', evtObj => {
    console.log("Event caught");
    console.log(evtObj);
});
weatherEmitter.getWeather();
