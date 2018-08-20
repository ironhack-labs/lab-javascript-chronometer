// Constructor

class Chronometer {

    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
        this.time = [];
    }

    startClick(printTime) {
        this.intervalId = setInterval( () => {
            this.currentTime++;

            if(Math.floor( (this.currentTime) / 6000) > 99) {
                clearInterval(this.intervalId);
            }

            this.setTime();
            printTime();
        }, 10);
    }

    setMinutes() {
        return Math.floor(this.currentTime / 6000);
    }

    setSeconds() {
        return Math.floor(this.currentTime/100) % 60;
    }

    setMilliseconds() {
        return this.currentTime % 100;

    }

    twoDigitsNumber(time) {
        if( time < 10) {
            return '0' + time;
        } else {
            return String(time);
        }
    }

    setTime() {
        let minutes = this.twoDigitsNumber( this.setMinutes() );
        let seconds = this.twoDigitsNumber( this.setSeconds() );
        let milliseconds = this.twoDigitsNumber( this.setMilliseconds() );

        this.time = [minutes, seconds, milliseconds];
    }

    stopClick() {
        clearInterval(this.intervalId);
    }

    resetClick() {
        this.currentTime = 0;
    }
}



