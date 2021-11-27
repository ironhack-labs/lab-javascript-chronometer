class Chronometer {
  constructor() {
      this.currentTime = 0;
      this.intervalId = null;
    }

  start(callback) {
    this.intervalId = setInterval(() => {
      console.log(this.currentTime);
      this.currentTime++;
      if(callback){
        callback();
    }
     }, 1000);
  }

  getMinutes() {
   let minutes = Math.floor(this.currentTime/60);
   return minutes;
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime%60);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    const numToString = value.toString();
  if (numToString <= 9){
    return `0${numToString}`
  }
  return numToString;
  }

  stop() {
   return clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
   let min = this.computeTwoDigitNumber(this.getMinutes());
   let sec = this.computeTwoDigitNumber (this.getSeconds());
   return `${min}:${sec}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
