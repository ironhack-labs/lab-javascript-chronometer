class Chronometer {
  constructor() {
   
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) {  
        callback();
      }
      printTime();
    }, 1000);
  }

  getMinutes() {
   
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
   
    return this.currentTime % 60;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  }
  getMilliseconds() {
   
    return (this.currentTime * 1000) % 1000;
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : value.toString();
  }   

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;
    minDecElement.innerHTML = '0';
    secDecElement.innerHTML = '0';
    minUniElement.innerHTML = '0';
    secUniElement.innerHTML = '0';
    milDecElement.innerHTML = '0';
    milUniElement.innerHTML = '0';
  }

  split() {
    let minDec = this.computeTwoDigitNumber(this.getMinutes());
    let secDec = this.computeTwoDigitNumber(this.getSeconds());
    let milDec = this.computeTwoDigitNumber(this.getMilliseconds());
    return `${minDec}:${secDec}:${milDec}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
