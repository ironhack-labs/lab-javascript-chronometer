class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.min = 0;
    this.sec = 0;
    this.milli = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1 
      callback()
    }, 1000);
  }
  

  getMinutes(){
    this.min = Math.floor(this.currentTime / 60);
    
    return this.computeTwoDigitNumber(this.min)
  }

  getSeconds() {
    this.sec = this.currentTime % 60;
    
    // 
    return this.computeTwoDigitNumber(this.sec)
  }
  // getMilli(){
  //   this.milli = Math.floor(this.currentTime % 1000 )
  //   return this.computeTwoDigitNumber(this.milli)
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
    let myMin = this.computeTwoDigitNumber(this.getMinutes()).replace(/["]+/g, '')
    let mySec = this.computeTwoDigitNumber(this.getSeconds()).replace(/["]+/g, '')
    //let myMilli = this.computeTwoDigitNumber(this.getMilli()).repeat(/["]+/g, '')
    let str = myMin + ":" + mySec //+ ":" + myMilli
    callback(str)
    return str
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
