class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    // ... your code goes here
    this.IntervalId = setInterval(() => {
      this.currentTime ++
    }, 1000)
  }
  getMinutes() {
    // ... your code goes here
    if(this.currentTime === 0) {
      return 0
    }
    return Math.trunc(this.currentTime / 60)
  }
  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0
    }
    if(this.currentTime < 60) {
      return this.currentTime
    }
    const rest = this.currentTime % 60
    return rest
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    if(number < 10) {
    return `0`+ number
    }
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
    let min = this.getMinutes()
    min = this.twoDigitsNumber(min)

    let sec = this.getSeconds()
    sec = this.twoDigitsNumber(sec)
 
    // return getMinutes(twoDigitsNumber()) + ':' + getSeconds(twoDigitsNumber())
    return min + ':' + sec
  }
}
