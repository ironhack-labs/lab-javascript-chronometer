class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = undefined;

    }

    startClick() {
        if (this.intervalId !== undefined) return false;

        this.intervalId = setInterval(() => {
            this.currentTime += 11;
        }, 1);
    }

    getMinutes() {
        return ~~(this.currentTime / 60000);
    }

    getSeconds() {
        return (this.currentTime % 60000) / 1000;
    }
    getMiliSeconds() {
        return this.currentTime % 100;
    }

    twoDigitsNumber(value) {
        return value < 10 ? '0' + value : value.toString();
    }

    stopClick() {
        clearInterval(this.intervalId);
        this.intervalId = undefined;
    }

    resetClick() {
        this.currentTime = 0;
    }

    splitClick() {
        return `${this.getMinutes()}:${this.getSeconds()}`;
    }
}