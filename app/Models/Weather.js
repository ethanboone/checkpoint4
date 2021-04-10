export default class Weather {
    constructor(data) {
        this.icon = data.weather[0].icon
        this.temp = data.main.temp
        this.location = data.name
        this.fht = true
    }

    get Template() {

        return /*html*/`
        <div class="p-2">
            <button class="btn text-light" onclick="app.weatherController.change()">
                <div>${this.Temp}</div>
                <div>${this.location}</div>
            </button>
        </div>
        `
    }

    get Temp() {
        let kelvin = this.temp
        if (this.fht == true) {
            let fahrenheit = `${Math.floor((kelvin - 273.15) * 9 / 5 + 32)}° Fahrenheit`
            return fahrenheit
        } else {
            let celcius = `${Math.floor(kelvin - 273.15)}° Celcius`
            return celcius
        }
    }
}
