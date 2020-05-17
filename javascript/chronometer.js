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
    twoDigitsNumber() {
        let newString = toString(this.currentTime)
        return newString.slice(-2)
    }
    stopClick() {
      clearInterval(this.intervalId);
    }
    resetClick() {
        this.currentTime = 0
    }
    splitClick() {
     let min = this.getMinutes()
     let sec = this.getSeconds()

     if (min < 10) {
      return (`${0}${min}:${0}${sec}`);
    } else {
      return (`${min}:${sec}`);
    }
  }
}