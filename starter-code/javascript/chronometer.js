class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }
    startClick() {
        this.intervalId = setInterval(() => {
            this.setTime();
            this.currentTime++;
        }, 1000)


    }

    setMinutes() {
        return parseInt(this.currentTime / 60);
        //y
    }

    setSeconds() {
        return parseInt(this.currentTime % 60);

    }

    twoDigitsNumber(num) {
        if (num < 10) {
            return `0${num}`;

        } else {
            return `${num}`;
        }

    }

    setTime() {
        let seconds = this.twoDigitsNumber(this.setSeconds());
        let minutes = this.twoDigitsNumber(this.setMinutes());
    }


    setMilliseconds() {}
    stopClick() {}
    resetClick() {}
    splitClick() {}
    splitClick() {}
}