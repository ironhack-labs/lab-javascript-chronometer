class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // this.milli = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1 
      callback()
    }, 1000);
  }
  

  getMinutes(){
    return this.computeTwoDigitNumber(Math.floor(this.currentTime / 60))
  }

  getSeconds() {
    return this.computeTwoDigitNumber(this.currentTime % 60)
  }
  // getMilli(){
  //   return this.computeTwoDigitNumber(Math.floor(this.currentTime % 1000 ))
  // }

  computeTwoDigitNumber(value) {
    let str = JSON.stringify(value)
    if (str.length == 1){
      let str = '0' + value
      return str;
      
    }
    else{
      return str
    }
  }

  stop() {
    
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split(callback) {
    let myMin = this.getMinutes()
    console.log(myMin)

    let str = myMin + ":" + mySec
    callback(str)
    return str
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
