class Chronometer {

  // Instantiates an object 'chronometer'
  //  - currentTime = increments every second once 'start' is called 
  //  - intervalId = the ID reference of our interval, once invoked
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  //typeof callback === 'function' ? callback() : 0
  
  // 'start' Function
  // Expects: (optional) callback Function, if assigned, will run that function 
  // before the time is incremented
  //  Returns: Nothing.  Increments 'currentTime' by one
  start(callback) {
    this.intervalId = setInterval(() => {
      callback ? callback() : 0
      this.currentTime++
    }, 10);
  }


  // function getMinutes
  // Expects: Nothing
  // Returns: Full Minute(s) counted by currentTime
  getMinutes() {
    return Math.floor((this.currentTime/100)/60)
  }

  // function getSeconds
  // Expects: nothing
  // Returns: number of seconds counted by currentTime
  // 'after' the given minute.
  // ex: if time = 110, returns 60
  // ex2: if time = 180, returns 0
  getSeconds() {
    return Math.floor((this.currentTime/100)%60)
  }

  
  getMilliseconds() {
    // return(this.currentTime*10);
    // console.log(this.currentTime);
    // console.log(this.computeTwoDigitNumber(this.currentTime%100));
    return (this.currentTime%100);
  }

  // function 
  // Expects: an INT
  // Returns: that INT with the tens place
  // 
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
