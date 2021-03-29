class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }
    startClick(callback) {
        this.intervalId = setInterval(() => {
            this.currentTime += 1;
            if (callback) {
                callback(this.currentTime);
            }
        }, 1000);
    }

    getMinutes() {
        return Math.floor(this.currentTime / 60);
    }
  getSeconds() {
        return this.currentTime-(this.getMinutes() * 60);
  }
  twoDigitsNumber(num) {
    if (num < 10){
        return `0${num}`;
    }else{
        return `${num}`;
    }
  }
  stopClick() {
        return clearInterval(this.intervalId);
  }
  resetClick() {
        return (this.currentTime = 0);
  }
  splitClick(minutes, seconds) {
        minutes = this.twoDigitsNumber(this.getMinutes());
        seconds = this.twoDigitsNumber(this.getSeconds());

        return `${minutes}:${seconds}`;
  }
}
