class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) {
        callback();
      }
    }, 1);
  }
  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    } else if (this.currentTime / 6000) {
      this.minutes += 1;
    }
    return (this.minutes = Math.floor(this.currentTime / 6000));
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    } else if ((this.currentTime/100) % 60) {
      this.seconds += 1;
    }
    return this.seconds = Math.floor((this.currentTime/100) % 60);
  }

  getMilliSeconds(){
    if (this.currentTime === 0) {
      return 0;
    } else if ( this.currentTime )
      this.milliseconds += 1;
    
    return this.milliseconds 
  }
  computeTwoDigitNumber(value) {
    //  && should return '00' when the value is 0 &&
    // should return '15' when the value is 15 && Should return '03' when the value is 3
    //}

    this.currentTime;
    let twoDigits = value.toString();
    if (twoDigits === 0) {
      return '00';
    } else if (twoDigits.length < 2) {
      return 0 + twoDigits;
    }
    return twoDigits;
  }

  stop() {
    clearInterval(this.intervalId );
  }

  reset() {
    // should reset the value of the "currentTime" property to 0

    clearInterval((this.currentTime = 0));
  }

  split() {
    // should return valid format with minutes and seconds

    let splitForm;
    return (splitForm =
      this.computeTwoDigitNumber(this.getMinutes()) +
      ':' +
      this.computeTwoDigitNumber(this.getSeconds()) +
      ':' +
      this.computeTwoDigitNumber(this.getMilliSeconds()))
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
