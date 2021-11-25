class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      callback()
      this.currentTime++;
    }, 1000);
    return this.currentTime;
  }

  getMinutes() {
    // ... your code goes here

    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    // ... your code goes here

    return this.currentTime%60
  }

  getMilliseconds() {
    return this.currentTime % 100 ;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
/*
    if (value.toString().length > 1){
      return value.toString()
    } else{
      return ('0' + value)
    }
*/



return value > 9 ? value.toString() : '0' + value

/*
   if (value > 9){
      return value.toString()
    } else{
      return ('0' + value)
    }*/
  }

  stop() {
        // ... your code goes here

    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here

    this.currentTime = 0

    clearInterval(this.currentTime)
  }

  split() {
    // ... your code goes here
    //let min = this.computeTwoDigitNumber(this.getMinutes(this.currentTime))
    //let seg = this.computeTwoDigitNumber(this.getSeconds(this.currentTime))
    return `${this.computeTwoDigitNumber(this.getMinutes(this.currentTime))}:${this.computeTwoDigitNumber(this.getSeconds(this.currentTime))}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
