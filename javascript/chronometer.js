class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }
    startClick(callback = null) {

        this.intervalId = setInterval(() => {
            this.currentTime++;
            console.log(this.currentTime);
        }, 1000);

    }
    getMinutes() {
        const minutes = Math.floor(this.currentTime / 60);
        return minutes;
    }
    getSeconds() {
        const seconds = this.currentTime % 60;
        return seconds;
    }
    twoDigitsNumber(number) {

        if (number === 0) {
            return '00';
        }

        if (number < 10 && number >= 1) {
            return '0' + number;
        }

        return number.toString();
    }
    stopClick() {
        clearInterval(this.intervalId);
    }
    resetClick() {
        this.currentTime = 0;
    }
    splitClick() {
        let minutes = this.getMinutes();
        let seconds = this.getSeconds();

        if (minutes < 10 && seconds < 10) {

            return `${0}${minutes}:${0}${seconds}`;

        } else if (minutes < 10 && seconds > 10) {

            return `0${minutes}:${seconds}`;

        } else if (minutes > 10 && seconds < 10) {

            return `${minutes}:0${seconds}`;

        } else {
            return `${minutes}:${seconds}`;
        }
    }
}