class Chronometer {



  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime ++
    }, 1000)
  }
  getMinutes() {
    // ... your code goes here
    const minutes = this.currentTime/60
    return Math.floor(minutes)
  }
  getSeconds() {
    // ... your code goes here
    const seconds = this.currentTime
    return seconds-(this.getMinutes()*60)
  }
  twoDigitsNumber(someNmb) {
    // ... your code goes here
    return ('0' + someNmb).slice(-2)
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
    const min = this.getMinutes()
    const sec = this.getSeconds()
    
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`
  }
}
