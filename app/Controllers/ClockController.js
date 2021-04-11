import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";
import Clock from "../Models/Clock.js"


//Private
function _draw() {
    document.getElementById('clock').innerText = ProxyState.clock.Template
}

//Public
export default class ValuesController {
    constructor() {
        ProxyState.on("clock", _draw);
        this.getTime()
    }

    getTime() {
        clockService.getTime()
    }

}