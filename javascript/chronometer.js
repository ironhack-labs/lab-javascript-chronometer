class Chronometer {
  constructor() {
      this.currentTime = 0;
      this.intervalId = 0;
   }

  startClick(callback) {
    let intervalID = setInterval(() => {
      this.currentTime++;
    }, 1000)
  }
  getMinutes() {
    let minutes = this.currentTime/60
    minutes = Math.floor(minutes)
    return minutes
  }
  getSeconds() {
    let seconds = this.currentTime % 60
    seconds = Math.floor(seconds)
    return seconds
  }

  twoDigitsNumber(number) {
    if (number.toString().length < 2) {
      number = "0" + number;
    }
    return number
  }

  stopClick() {
    clearInterval(this.intervalID);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}
