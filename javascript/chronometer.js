class Chronometer {
  constructor() {
    this.currentTime = 58;
    this.intervalId = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() =>{
      this.currentTime++;

      if(callback !== undefined){
        callback();
      }
    }, 1000);
  }
    

  getMinutes() {
    return Math.floor(this.currentTime /60);
  };

  getSeconds() {
    return Math.floor(this.currentTime * 60);
  };

  computeTwoDigitNumber(value) {
    return ('0' + value).slice(-2);
    
    let minutes = this.computeTwoDigitsNumber(this.getMinutes());
    let seconds = this.computeTwoDigitsNumber(this.getSeconds());
  };

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
     this.computeTwoDigitsNumber(this.getMinutes()); +
    ":" +
    this.computeTwoDigitsNumber(this.getSeconds());
  };
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
};

