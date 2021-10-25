class Chronometer {
  currentTime;
  intervalId;

  constructor() {
    this.currentTime= 0;
    this.intervalId=null
  };

  start(callback) {
    this.intervalId = setInterval(()=> {
      if(callback){
        callback();
      }
      this.currentTime=this.currentTime+1;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime%60;
  }

  computeTwoDigitNumber(value) {
    if(value<10){
      return `0${value.toString()}`;
    }else{
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId); 
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
