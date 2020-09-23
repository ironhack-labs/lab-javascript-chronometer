class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    // ... your code goes here
    setInterval(() => {
      
      this.currentTime += 1
      callback()
    }, 1000)
  }
  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60)
    return Number(minutes.toFixed())
  }
  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60
    return seconds
  }
  twoDigitsNumber(input) {
    // ... your code goes here
    if(input < 10){
      return ('0' + input)
    } else {
      return (input.toString())
    }
  }
  stopClick() {
    // ... your code goes here
    //clearInterval
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
    let formMin = this.twoDigitsNumber(this.getMinutes())
    let formSec = this.twoDigitsNumber(this.getSeconds())
    return formMin + ':' + formSec
  }
}

/*
1-chronometer
logic - NO DOM
jasmine

2-index.js
DOM
index.html
najprej adddEventListener
queryji
chronometer
calback - chrom
startcliclk - index
*/