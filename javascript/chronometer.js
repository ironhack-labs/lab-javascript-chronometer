class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
    this.milliSecondsIntervalId = 0;
    this.millisecondTime = 0;
  }
  startClick(intervalId) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000);

    this.milliSecondsIntervalId = setInterval(() => {
      this.millisecondTime++
    }, 10)
  }
  getMilliSeconds(){
    return Math.floor(this.millisecondTime)
  }
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime%60)
  }
  twoDigitsNumber(x) {
    // ... your code goes here
      let doubleDigitString = x.toString()
      let doubleDigit = ""
      if (doubleDigitString.length === 1) {
        doubleDigit = "0"+ x
      }
      else if(doubleDigitString.length>1){
        doubleDigit = doubleDigitString.slice(-2)
      }
      return doubleDigit
    
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
    clearInterval(this.milliSecondsIntervalId)
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0
    this.millisecondTime = 0
  }
  splitClick() {
    // ... your code goes here
    let splitSeconds = this.getSeconds(this.currentTime)
    let splitMinutes = this.getMinutes(this.currentTime)
    let DoubleDigitizedSeconds = this.twoDigitsNumber(splitSeconds)
    let DoubleDigitizedMinutes = this.twoDigitsNumber(splitMinutes)
    return `${DoubleDigitizedSeconds}:${DoubleDigitizedMinutes}`
  }
}
