class Chronometer {
  constructor() {

    this.currentTime = 0
    this.intervalId = 0

    // ... your code goes here
  }
  startClick(callback) {

    this.intervalId = setInterval(() => this.currentTime++, 1000)
    // ... your code goes here
  }
  getMinutes() {

    let min = 0
    if (this.currentTime % 60) {
      min = this.currentTime / 60
    }
    return parseInt(min)
    // ... your code goes here
  }
  getSeconds() {

    let seconds = this.currentTime - this.getMinutes() * 60
    return seconds

    // ... your code goes here
  }
  twoDigitsNumber() {

    let minTwiDig = this.getMinutes()
    let secTwoDig = this.getSeconds()

    if (minTwiDig < 10 && secTwoDig < 10) {
      return `0${minTwiDig}`, `0${secTwoDig}`
    }

    else if (minTwiDig < 10 && secTwoDig > 10) {
      return `0${minTwiDig}`, `${secTwoDig}`
    }

    else if (secTwoDig < 10 && minTwiDig > 10) {
      return `${minTwiDig}`, `0${secTwoDig}`
    }

    else {
      return `${minTwiDig}`, `${secTwoDig}`
    }

    // ... your code goes here
  }
  stopClick() {

    clearInterval(this.intervalId)
    // ... your code goes here
  }
  resetClick() {

    return this.currentTime = 0
    // ... your code goes here
  }
  splitClick(min, sec) {

    min = this.twoDigitsNumber(min)
    sec = this.twoDigitsNumber(sec)
    return `${min}:${sec}`


    // ... your code goes here
  }
}
