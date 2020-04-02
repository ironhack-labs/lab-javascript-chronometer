class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(cb) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      console.log(this.currentTime)
      if (cb) {
        cb()
      }
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60)
    return seconds
  }
  twoDigitsNumber(number) {
    if (number < 10) {
      return `0${number}`
    } else return `${number}`
  }

  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds());
  }
}

const watch = new Chronometer()
let time = watch.currentTime
let interval = watch.intervalId
// watch.startClick()
watch.twoDigitsNumber()