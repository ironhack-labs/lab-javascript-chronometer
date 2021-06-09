class Chronometer {
  constructor() {
    currentTime()
     this.currentTime = 0;
    
  
    instervalID()
    this.intervalId = null;
  }


  start(callback) {
   const i = 0;
    const intervalId = setInterval(function () {
  console.log(i);
 
  i++;

   if (i > 10) {
    clearInterval(intervalId);
  }
}, 1000);
  }

  getMinutes() {
   const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
  const seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) return '0' + value.toString();
    if (value > 10) return value.toString();     
  }

  stop() {
   clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
     const splitTime = `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
    return splitTime;  
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
