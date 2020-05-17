// AJDC: Dejo mis comentarios antes del pull-request los borramos.
class Chronometer {
    constructor() {
        this.currentTime = 0
        this.intervalId = 0
    }
    startClick(callback) {
        setInterval(() => this.currentTime++, 1000);
    }
    getMinutes() {
        return Number(Math.floor(this.currentTime / 60))
    }
    getSeconds() {
        return Number(this.currentTime - ((Math.floor(this.currentTime / 60)) * 60))
    }
    twoDigitsNumber() {
        /* AJDC: ahora entiendo la solución de Pablo, he leido la este artículo de https://www.w3schools.com/jsref/jsref_slice_string.asp y al final del todo te lo explica, jamás me hubiera acordado de esto o se me hubiera ocurrido. */
        // AJDC: let newString = toString(this.currentTime) <- Esto creo lo podemos eliminar
        return toString(this.currentTime).slice(-2)
    }
    stopClick() {
        // AJDC: OK
        clearInterval(this.intervalId);
    }
    resetClick() {
        // AJDC: OK
        this.currentTime = 0
    }
    splitClick() {
        // AJDC: cambio a const
        const min = this.getMinutes()
        const sec = this.getSeconds()

        // AJDC: Añado dos condiciones más que creo que se podrían dar, lo hablamos por slack si no lo ves así
        if (min < 10 && sec < 10) {
            return (`0${min}:0${sec}`);
        } else if (min > 10 && sec < 10) {
            return (`${min}:0${sec}`);
        } else if (min < 10 && sec > 10) {
            return (`0${min}:${sec}`);
        } else {
            return (`${min}:${sec}`);
        }
    }
}