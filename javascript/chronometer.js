class Chronometer {
  constructor() {
    // 1 currentTime --> 10 ms,
    // There are 2 digits --> it will mark from 0 to 99 
    // watch: 01 --> 10ms, watch: 03 -->30ms, watch: 05 -->50ms, watch: 99 --> 990ms
    // Convertion --> 1000ms -> 1s / 10ms --> 100s
    this.currentTime = 0; 
    this.intervalId = null;
  }
  
  // start(callback) {
  //   this.intervalId = setInterval(()=> {
  //     this.currentTime ++;
  //     if(typeof callback === 'function') {
  //       callback();
  //     }
  //   }, 1000)
  // }
  start(callback) {
    this.intervalId = setInterval(()=> {
      this.currentTime ++;
      if(typeof callback === 'function') {
        callback();
      }
    }, 10) // every 10 milliseconds --> 10 will run it every 100th of a second 
  }


  getMinutes() {
    // every setInterval, the currentTime is--> 10ms or 100 seconds
    //  1min = 60 sec
    return  Math.floor(this.currentTime / (60 * 100)); 
    //return  Math.floor(this.currentTime / 60000);
  }

  getSeconds() {
     // every setInterval, the currentTime is--> 10ms or 100 seconds
     // multiply by 100
    return Math.floor((this.currentTime/ 100)  % 60);
  }

  getMilliseconds() {
    return Math.floor(this.currentTime % 100); // ms from 1 to 99
  }

  computeTwoDigitNumber(value) { 
    // convert numbers in string
    // check if the value has less than 2 digits
    // padStart--> pads the current string with another string-->second arg, until reaching the given length-->first argument
    console.log(value);
    return String(value).length < 2 
      ? String(value).padStart(2, '0') 
      : String(value);
    // console.log(value)
    // const twoDigits = `0${value}`.slice(-2);
    // console.log(twoDigits);
    // return twoDigits;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds());
    return `${minutes}:${seconds}:${milliseconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}


