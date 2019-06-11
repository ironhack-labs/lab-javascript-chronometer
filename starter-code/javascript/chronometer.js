class Chronometer {
  constructor() {
    this.currentTime=0
    this.intervalId
  }
  
  
  startClick() {
    this.intervalId = setInterval (() => {
      this.currentTime++
    },1000)
  } 
  
  getMinutes() {
    return parseInt(this.currentTime/60) 
  }

  getSeconds() {
    return this.currentTime % 60
    // return minutes == 0 ? this.currentTime : Math.abs(minutes * 60 - this.currentTime)
  }

  twoDigitsNumber(number) {
    return ("0" + number).slice(-2);
  }

  stopClick() {
    return clearInterval(this.intervalId)
  }

  resetClick() {
    return this.currentTime = 0
  }
  
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}

