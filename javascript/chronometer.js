class Chronometer {
    //definir las propiedades de esta clase
    constructor() {

        this.currentTime = 0;
        this.intervalId = 0;


    }

    startClick(cb) {
        // ...

        this.intervalId = setInterval(() => {
            this.currentTime++;
            cb;
        }, 1000)

    }
    getMinutes() {
        // ... your code goes here

        return Math.floor(this.currentTime / 60)
    }
    getSeconds() {
        // ... your code goes here

        return this.currentTime % 60
    }
    twoDigitsNumber(numero) {
        // ... your code goes here
        let dosDigitos = numero.toString()
        if (dosDigitos.length < 2) {
            dosDigitos = "0" + dosDigitos
        }

        return dosDigitos
    }
    stopClick() {
        // ... your code goes here
        clearInterval(this.intervalId);

    }
    resetClick() {
        // ... your code goes here

        this.currentTime = 0;
    }
    splitClick() {
        // ... your code goes here

        return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
    }
}