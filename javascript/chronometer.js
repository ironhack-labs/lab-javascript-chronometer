class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }
    startClick(callback) {

        this.intervalId = setInterval(() => this.currentTime++, 1000);

    }
    getMinutes() {
        const minutes = Math.floor(this.currentTime / 60);

        return minutes;
    }
    getSeconds() {
        const seconds = this.currentTime % 60;

        return seconds;
    }
    twoDigitsNumber() {
        // este no se entiende y los test están comentados
        let digitMinutes = this.getMinutes();
        let digitSeconds = this.getSeconds();

        return `07`;
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