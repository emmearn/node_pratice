const { EventEmitter } = require('events');

class WeatherEmitter extends EventEmitter {
    async getWeather() {
        const weatherInfo = await Promise.resolve({ condition: 'Sun',  temperature: 25 });
        this.emit('weather', weatherInfo);
    }
}

module.exports = WeatherEmitter;