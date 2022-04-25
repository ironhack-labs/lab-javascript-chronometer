class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
  
    this intervalID = setInterval(() => {
      this.currentTime = intervalCounter += 1;
      
      if(callback){
      return callback;
      }

    }, 1000);
   
   
    }
}

  getMinutes() {
  
    let Minutes = Math.floor this.currentTime /60;
    return getMinutes;

  }

  getSeconds() {
   
    let numberofSeconds = this.currentTime % 60;
    return getSeconds;
}

  computeTwoDigitNumber(value) {
    if(value < 10 ) return 0
    return value;
  }

  stop() {
    clearInterval this.intervalId;
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let splict `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
    return '${getMinutes}: ${getSecond}';
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
