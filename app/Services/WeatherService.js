import { ProxyState } from "../AppState.js";
import Value from "../Models/Value.js";
import Weather from "../Models/Weather.js";
import { sandboxApi } from "./AxiosService.js";

class WeatherService {
    async getWeather() {
        let res = await sandboxApi.get('Weather')
        ProxyState.weather = new Weather(res.data)
        console.log(ProxyState.weather)
    }


    change() {
        ProxyState.weather.fht = !ProxyState.weather.fht
        console.log(ProxyState.weather)
        ProxyState.weather = ProxyState.weather
        //ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
    }
}

export const weatherService = new WeatherService();