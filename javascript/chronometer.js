class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = null;

  }

  start(callback) {
    this.intervalId =  setInterval(() => {
       this.currentTime++; 
       if (callback){callback()};
    },1000);
  }

  getMinutes() {
    let timeInMinutes = Math.floor(this.currentTime / 60);
    return timeInMinutes;
  }

  getSeconds() {
  let seconds = this.currentTime % 60;
  return seconds;
  }

  computeTwoDigitNumber(value) {
  let final = value.toString();
  if (final.length == 1){
    var twoDigits = '0' +final;
    return twoDigits;
    }else {
    return final;
    }
  }

  stop() {
  clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

   split()  {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    let splitMin = this.computeTwoDigitNumber(min);
    let splitSec = this.computeTwoDigitNumber(sec);
    const splitTime = `${splitMin}:${splitSec}`;
    return splitTime;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
