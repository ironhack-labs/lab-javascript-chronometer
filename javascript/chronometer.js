class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback) {

    this.intervalId = setInterval(() => {
      console.log(this.currentTime);

      this.currentTime++;

      //if (this.currentTime > 0) {
      // clearInterval(this.intervalId);
      //}
    }, 1000);
  }

  getMinutes() {
    let minutes = this.currentTime / 60
    return Math.floor(minutes)

  }
  getSeconds() {
    let seconds = this.currentTime % 60
    return seconds

  }

  twoDigitsNumber(num) {
    if (num < 10) {
      return `0${num}`
    }
    else  {
      return `${num}`
    }
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }

  splitClick() {

    let minutes = this.getMinutes()
    console.log("minutes", minutes)
    let seconds = this.getSeconds()
    console.log("seconds", seconds)

    return this.twoDigitsNumber(minutes) + ":" + this.twoDigitsNumber(seconds)

  }
}
