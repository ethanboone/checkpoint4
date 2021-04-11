export default class Clock {
    constructor(clock) {
        this.clock = clock
    }

    get Template() {

        return /*html*/`
            ${this.clock}
        `
    }
    GetTime() {
        debugger
        let date = new Date(); /* creating object of Date class */
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let midday = "AM";
        midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
        hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour); /* assigning hour in 12-hour format */
        hour = updateTime(hour);
        min = updateTime(min);
        sec = updateTime(sec);
        let t = setTimeout(getTime, 1000);
        hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
    }
    updateTime(k) { /* appending 0 before time elements if less than 10 */
        if (k < 10) {
            return "0" + k;
        }
        else {
            return k;
        }
    }
}
