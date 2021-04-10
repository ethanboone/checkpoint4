import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


//Private
function _draw() {
    let weather = ProxyState.weather;
    let template = ''
    //weather.forEach(w => template += w.Template)
    document.getElementById("weather").innerHTML = weather.Template
}

//Public
export default class ValuesController {
    constructor() {
        ProxyState.on("weather", _draw);
        this.getWeather()
    }

    async getWeather() {
        try {
            weatherService.getWeather()
        } catch (error) {
            console.error(error)
        }
    }

    change() {
        weatherService.change()
    }

}