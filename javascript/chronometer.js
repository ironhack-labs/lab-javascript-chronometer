class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {this.currentTime += 1},1000);
    };
     
  getMinutes() {
    let getTotalMinutes = Math.floor(this.currentTime / 60);
  return getTotalMinutes;
  }

  getSeconds() {
  if (this.currentTime % 60 === 1) {
  } return this.currentTime%60;
  }

  computeTwoDigitNumber(value) {
    if(value <= 9) {
      return '0' + value;
    } else { return value.toString();
  }
}

  stop() {
   clearInterval(this.intervalId);
  }

  reset() {
   setInterval(this.currentTime = 0);
  }

  split() {
   return (this.computeTwoDigitNumber(this.getMinutes())+':'+this.computeTwoDigitNumber(this.getSeconds()));
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
