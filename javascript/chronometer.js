class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }

    startClick(callback) {
        this.intervalId = setInterval(() => { this.currentTime += 1; }, 1000);
    }

    getMinutes() {
        return Math.floor(this.currentTime / 60);
    }

    getSeconds() {
        if (this.currentTime === 0) return 0;
        return this.currentTime % 60;
    }

    twoDigitsNumber(num) {
        const digit = JSON.stringify(num);
        if (digit.length === 1) { return 0 + digit; }
        return digit;
    }

    stopClick() {
        clearInterval(this.intervalID);
    }

    resetClick() {
        this.currentTime = 0;
    }

    splitClick() {
        const min = this.twoDigitsNumber(this.getMinutes());
        const sec = this.twoDigitsNumber(this.getSeconds());
        const result = `${min}:${sec}`;
        return result;
    }
}
