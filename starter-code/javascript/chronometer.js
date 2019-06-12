class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(()=> {this.currentTime++}, 1000)
  }
  getMinutes() {
    if(this.currentTime===0) return 0
    return parseInt(this.currentTime/60)
  }

  getSeconds() {
    if(this.currentTime===0) return 0
    return parseInt(this.currentTime%60)
  }

  twoDigitsNumber(num) {
    if(num.toString().length === 1) {
      return "0" + num.toString()
  } else {
      return num.toString()
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }
  
  resetClick() {
    this.currentTime = 0
  }
  // splitClick() {}
}