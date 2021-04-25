class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback) {

    this.intervalId = setInterval(() =>
      this.currentTime++
      , 1000);
    return this.intervalId

  }
  

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime)
    if (seconds > 60) {
      seconds = Math.floor(this.currentTime) - Math.floor(this.currentTime / 60) * 60
    }
    return seconds
  }

  twoDigitsNumber(digits) {
    if (digits <10){return `0${digits}`}
    else{return `${digits}`}

  }
  stopClick() {
    const stop = clearInterval(this.intervalId);
    return stop
  }
  resetClick() {
    this.currentTime = 0
    return this.currentTime
  }
  splitClick() {
    // ... your code goes here
    const minutes = this.twoDigitsNumber(this.getMinutes())
    const seconds = this.twoDigitsNumber(this.getSeconds())
    return `${minutes}:${seconds}`
  }
}
