class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  //typeof callback === 'function' ? callback() : 0
  start(callback) {
    this.intervalId = setInterval(() => {
      callback ? callback() : 0
      this.currentTime++
    }, 10);
  }

  getMinutes() {
    return Math.floor((this.currentTime/100)/60)
  }

  getSeconds() {
    return Math.floor((this.currentTime/100)%60)
  }

  getMilliseconds() {
    // return(this.currentTime*10);
    // console.log(this.currentTime);
    // console.log(this.computeTwoDigitNumber(this.currentTime%100));
    return (this.currentTime%100);
  }

  computeTwoDigitNumber(value) {
    return ( value < 10 ? "0" + value : value.toString() );
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // return (this.computeTwoDigitNumber(this.getMinutes())+":"+this.computeTwoDigitNumber(this.getSeconds()));
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getMilliseconds())}`;
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
