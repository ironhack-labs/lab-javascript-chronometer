class Chronometer {
  constructor() {
      this.currentTime = 0;
      this.intervalId = null;

  }

  start(callback) {
    const intervalId = setInterval(() => {
       this.currentTime++
       if(callback){
         callback();
       }
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    return (value.toString().length === 1) ? `0${value}` : value.toString();
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    let time = `${this.minutes}:${this.seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
