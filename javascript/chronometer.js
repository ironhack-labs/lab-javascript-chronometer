class Chronometer {
  currentTime = 0; 
  intervalId = null;
  constructor() {

  }

  start(callback) {
   this.intervalId = setInterval(()=>{
      this.currentTime += 1;
      if(callback){
        callback()
      } 
    },1000) 
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }


  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let valueFormatted = ("0" + value).slice(-2);
    return valueFormatted
  }

  stop() {
     clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutesTwoDigits = this.computeTwoDigitNumber(this.getMinutes())
    const secondsTwoDigits = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutesTwoDigits}:${secondsTwoDigits}`;
  }
}






// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
