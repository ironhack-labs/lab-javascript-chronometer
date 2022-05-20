class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // this.intervalId = setInterval(() => {
    //   if (callback){
    //     callback ; ;
    //   }
    //   this.currentTime += 1; 
    // }, 1000);

    // Florian's solution :
    this.intervalId = setInterval(() => {
      this.currentTime += 1  
      if (typeof callback === 'function') {
        callback()
      }
    },1000)
  

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    let newValue = value.toString();
    if (newValue.length < 2) {
      return `0${newValue}`;
    } else {
      return newValue;
    }
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
