class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    // ... your code goes here
    setInterval(() => { 
       this.currentTime++
    }, 1000)
  }
  getMinutes() {
    // ... your code goes here
    if (this.currentTime > 60) {
      let minutes = parseInt(this.currentTime / 60)
      return minutes
    }
    else {
      return this.currentTime
    }
  }
  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60
    return seconds
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    if (number < 10) {
      let digit = number.toString()
      let twoDigits = digit
      let zero = "0"
      return zero.charAt(0)+twoDigits
    }
    return number.toString()
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0

  }
  splitClick() {
    // ... your code goes here
    let minutes = this.getMinutes()
    let seconds = this.getSeconds()
    if (minutes < 10 && seconds < 10) {
      return `${0}${minutes}:${0}${seconds}`
    }
    else if (minutes < 10 && seconds > 10) {
      return `${0}${minutes}:${seconds}`
    }
    else if (minutes > 10 && seconds < 10) {
      return `${minutes}:${0}${seconds}`
    }
    else {
      return `${minutes}:${seconds}`
    }
  }
}