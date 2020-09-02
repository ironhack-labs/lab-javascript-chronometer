class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
        this.intervalId2 = 0;
        this.milliSec = 0;
    }

    startClick(callback) {
        this.intervalId = setInterval(() => {
            this.currentTime++;
            callback();
        }, 1000);
    }

    //create start click millisecond
    startMilliClick(callback) {
        this.intervalId2 = setInterval(() => {
            this.milliSec++;
            callback();
        }, 1);
    }

    getMinutes() {
        return Math.trunc(this.currentTime / 60);
    }

    getSeconds() {
        return Number(this.currentTime % 60);
    }

    getMillisec() {
        return this.milliSec[1] + this.milliSec[0];
    }


    twoDigitsNumber(value) {
        if (!isNaN(value)) {
            if (value < 10) {
                value = "0" + value;
            }
            return value;
        } else {
            console.log("This is not a number");
        }
        return "BB";
    }

    stopClick() {
        clearInterval(this.intervalId);
        clearInterval(this.intervalId2);
    }

    resetClick() {
        this.currentTime = 0;
        this.milliSec = 0;
    }

    splitClick() {
        var result = "";
        result += this.twoDigitsNumber(this.getMinutes());
        result += ":";
        result += this.twoDigitsNumber(this.getSeconds());
        result += ":" + this.getMillisec();

        return result;
    }
}