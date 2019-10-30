class Chronometer {
  
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // this.milliseconds=0
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
    }, 1000)
  }
  getMinutes() {
    return parseInt(this.currentTime/60)
  }
  getSeconds() {
    return this.currentTime%60;
  }
  // getMilliseconds(){

  // }
  twoDigitsNumber(digits) {
    let result = digits.toString()
    return result.length === 1 ? '0'+result      :   result
          //condition to test - if the condition is true
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime =0
  }
  splitClick() {
    return this.currentTime ;
  }
}