class Chronometer {
  constructor() {

    // initializing 2 properties under constructor
    this.currentTime = 0;
    // currentTime starts from 0
    this.intervalId = null;
    // intervalId starts as null

 
  }

  // create Chronometer methods 

  start(callback) {
    // Chronometer class has <<start>> method. Upon calling this method, it will initialize the counter. 
    // <<start>> method should also accept a function as an argument  <<callback>>
    if (callback) {
      this.intervalId = setInterval(() => {
        // setting 1 second interval, which will increment the amound of seconds stored in the 
        // property of currentTime. Hence, currentTime ++.
        // intervalId that is returned by calling setInterval is assigned to intervalId property.
        this.currentTime += 1;
         // callback()
      }, 1000)
    
    } else {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000)
  }
}



  getMinutes() {
    let minute = 0;
    let countOfSecs = this.currentTime;
      if(countOfSecs == 0) {

// returns number of minutes passed as integer. Math.floor to get get whole number and 
// divide by 60 to get minutes.
        return 0;
      } else {
        minute = Math.floor(countOfSecs/60)
      }
      return minute
  }

  getSeconds() {
    let seconds = 0;
    // using modulus operator to, 60 secs = 1 min.
    if(this.currentTime % 60 !==0) {
      seconds = this.currentTime % 60
    }
    return seconds;
  }

  computeTwoDigitNumber(value) {
    let string = value.toString()
    // this method takes a number and returns a string with
    let newString = " ";

    if (string.length < 2) {
      newString = 0 + string
    } else {
      return string;
    }
      return newString;
  }

  stop() {
    clearInterval(this.intervalId)
 
  }

  reset() {
    this.currentTime = 0;

  }

  split() {
    // get two digit numbers for minutes and seconds
    let minutes =
    this.computeTwoDigitNumber(this.getMinutes())
    let seconds = 
    this.computeTwoDigitNumber(this.getSeconds())

    let display = `${minutes}:${seconds}` 
    return display;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
