class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
    if(callback){
      setInterval((callback), 1000);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime - this.getMinutes(this.currentTime)*60;
  }

  computeTwoDigitNumber(value) {
    if (value < 10 ){
      return "0"+value.toString();
    } else {
      return value.toString().slice(0, 2)
    }
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let formattedMinutes = this.computeTwoDigitNumber(this.getMinutes(this.currentTime));
    let formattedSeconds = this.computeTwoDigitNumber(this.getSeconds(this.currentTime));
    return formattedMinutes+":"+formattedSeconds;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
