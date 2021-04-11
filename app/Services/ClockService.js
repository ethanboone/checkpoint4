import { ProxyState } from "../AppState.js";
import Clock from "../Models/Clock.js";

class ClockService {

    updateTime(k) { /* appending 0 before time elements if less than 10 */
        if (k < 10) {
            return "0" + k;
        }
        else {
            return k;
        }
    }

    // getTime() {
    //     ProxyState.clock = new Clock()
    //     console.log(ProxyState.clock)
    // }
    getTime() {
        let date = new Date(); /* creating object of Date class */
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let midday = "AM";
        midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
        hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour); /* assigning hour in 12-hour format */
        hour = clockService.updateTime(hour);
        min = clockService.updateTime(min);
        sec = clockService.updateTime(sec);
        let clock = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
        let t = setTimeout(clockService.getTime, 1000);
        ProxyState.clock = new Clock(clock)
        console.log(ProxyState.clock)
        /* setting timer */
        //ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
    }


}

export const clockService = new ClockService();