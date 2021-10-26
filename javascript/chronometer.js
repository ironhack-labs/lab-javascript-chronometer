class Chronometer {
  constructor() {

    this.currentTime = 0;
    this.intervalId = null;

  }

  start(callback) {
    
    setInterval(() => {
      
      if (callback) {
        
        this.currentTime = callback;

      }

      this.currentTime += 1;

    }, 1000);  
      
  }

  getMinutes() {

    let minutesPassed = (this.currentTime / 60);

    return parseInt(minutesPassed);

  }

  getSeconds() {
    
    let secondsPassed = (this.currentTime % 60);

    return secondsPassed;

  }

  computeTwoDigitNumber(value) {

    const twoDigits = value.toString();

    return twoDigits.padStart(2, '0');
    
    // if (value.length == 1) {

    //   return '0' + value;

    // }

    // console.log(value);
    // return value;

  }

  stop() {
    
    clearInterval(this.intervalId);

  }

  reset() {
   
    this.currentTime = 0;

  }

  split() {
    
    let mins = this.getMinutes();

    let secs = this.getSeconds();

    let dosDigiSecs = this.computeTwoDigitNumber(secs);

    let dosDigiMins = this.computeTwoDigitNumber(mins);

    return (dosDigiMins+":"+dosDigiSecs); 

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
