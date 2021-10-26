class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
     this.intervalId = setInterval(() => {this.currentTime += 1}, 1000)

     /* can set to more than 1 sec 
     this.intervalId= setInterval(() => {this.currentTime ++
     if(callback) callback()
     }, 1000); */
  }

  getMinutes() {

    return +(Math.floor(this.currentTime / 60));
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if(value >= 10) {
      return `${value}`;
    } else {
      return `0${value}`;
    }
  }
  
  /* return String(value);
  same as return `${value}`
  or Boolean(value) or Number(value) Has to be capitalized */

  stop() {
  
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // let time = '';
    // time += this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds());
    // return time;
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds());
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
