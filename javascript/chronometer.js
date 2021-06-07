class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = '';
    this.currentMilisecond = 0;
  }

  start(callback) {
    let that = this;
    this.intervalId = setInterval (function(){
      that.currentTime += 1;
      that.setTime();
  }, 1000);
    
    this.milisecondIntervalId = setInterval(function(){
      if(that.currentMiliseconds === 99){
        that.currentMiliseconds = 0;
      }
      that.setMiliseconds();
      that.currentMiliseconds += 1;
    }, 10);
  };

  getMinutes() {
    return Math.floor(this.currentTime /60);
  };

  getSeconds() {
    return Math.floor(this.currentTime * 60);
  };

  computeTwoDigitNumber(value) {
    return ('0' + value).slice(-2);
    
    let minutes = this.computeTwoDigitsNumber(this.getMinutes());
    let seconds = this.computeTwoDigitsNumber(this.getSeconds(minutes));
  };

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.milisecondIntervalId);
  }

  reset() {
    this.currentTime = 0;
    this.currentMiliseconds = 0;
    this.setTime();
    this.setMilisecond();
    
  }

  split() {
    let minutes = this.computeTwoDigitsNumber(this.getMinutes());
    let seconds = this.computeTwoDigitsNumber(this.getSeconds(minutes));
    printSplit(minutes, seconds);
  };
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
};

  getMinutes() {
    return Math.floor(this.currentTime /60);
  };

  getSeconds() {
    return Math.floor(this.currentTime * 60);
  };

  computeTwoDigitNumber(value) {
    return ('0' + value).slice(-2);
    
    let minutes = this.computeTwoDigitsNumber(this.getMinutes());
    let seconds = this.computeTwoDigitsNumber(this.getSeconds(minutes));
  };

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.milisecondIntervalId);
  };

  reset() {
    this.currentTime = 0;
    this.currentMiliseconds = 0;
    this.setTime();
    this.setMilisecond();
    
  };

  split() {
    let minutes = this.computeTwoDigitsNumber(this.getMinutes());
    let seconds = this.computeTwoDigitsNumber(this.getSeconds(minutes));
    printSplit(minutes, seconds);
  };



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
