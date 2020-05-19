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
    twoDigitsNumber(number) {
        /* AJDC: Aunque pasaba el test el código hacia una cosa muy rara cómo lo habíamos puesto -> toString(this.currentTime), y estaba totalmente equivocado, esta funcioón nos tiene que devolver un string con length de dos siempre al pasarle el número y con this.currentTime le pasabamos un legth de 3 y petaba el chronometo:
        if(number.toString().length === 1) {
            return (`0${number}`)
        } else {
            return number.toString()
        } 
        Esto ya me devuelve el formato correcto */
        return number.length === 1 ? `0${number}` : `0${number}`
    }
    stopClick() {
        clearInterval(this.intervalId);
    }
    resetClick() {
        this.currentTime = 0
    }
    splitClick() {
        const min = this.getMinutes()
        const sec = this.getSeconds()
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