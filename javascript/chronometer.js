class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000)
    
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }

  computeTwoDigitNumber(value) {
    if(value.toString().length > 1){
      return value.toString();
    }
    else {
      return ('0' + value);
    }
    // let zero = '00';
    // if(value < 9){
    //   return `${(zero + value).slice(-zero.length)}`;
    // }
    // else {
    //   return `${value}`;
    // }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes(this.currentTime))}:${this.computeTwoDigitNumber(this.getSeconds(this.currentTime))}`;
  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
