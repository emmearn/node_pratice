const WeatherEmitter = require('./weather');
const weatherEmitter = new WeatherEmitter();
const { handlerFn, handlerFn2, handlerFn3 } = require('./handler');

weatherEmitter.on('weather', handlerFn);
weatherEmitter.on('weather2', handlerFn2);
weatherEmitter.once('weather2', handlerFn3); // caught event just one time

weatherEmitter.getWeather();
weatherEmitter.emit('weather2');

console.log(weatherEmitter.eventNames());
weatherEmitter.removeListener('weather2', handlerFn2);
console.log(weatherEmitter.eventNames());