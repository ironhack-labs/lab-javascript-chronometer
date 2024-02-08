/* The Chronometer class needs to have a start method. When called, start will start keeping track of time, by running a function in a 1 second interval, which will increment the amount of seconds stored in the property currentTime by 1. */

class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  };

  start(callback) {
    this.intervalId = setInterval(() => {
      if (!callback) {
        this.currentTime += 1;
      } else {
        callback();
      }
      
    }, 1000);
  }

  getMinutes() {
    let numberOfMinutes = Math.floor(this.currentTime / 60);
    return numberOfMinutes;
  }

  getSeconds() {
    let numberOfSeconds = this.currentTime % 60;
    return numberOfSeconds;
  }

  computeTwoDigitNumber(value) {
    if (value <= 9) {
      value = "0" + value.toString();
    }
    return value;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    let clockNumbersEls = document.querySelectorAll(".number");
    clockNumbersEls.forEach(el => {
      el.innerHTML = 0;
    });
  }

  split() {
    /* Is this code correct? */
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return minutes + ":" + seconds;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}


/* let currentTime = 0;
let intervalId = null;

function start(callback) {
  intervalId = setInterval(() => {
    if (!callback) {
      currentTime += 1;
      console.log(currentTime);
    } else {
      callback();
    }
  }, 1000);
  console.log("interval ID ---> " + intervalId);
}

function getMinutes() {

  setTimeout(() => {
    let numberOfMinutes = Math.floor(currentTime / 6);
  console.log("Minutes ----> " + numberOfMinutes);
  }, 10000);
  
  return numberOfMinutes;
};


start();
getMinutes(); */

/* let remainder = 210 % 60;

console.log(remainder); */


/* let value = 8;

if (value <= 9) {
  value = "0" + value.toString();
  console.log(value);
  console.log(typeof(value));
} */

/* split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes);
    let seconds = this.computeTwoDigitNumber(this.getSeconds);
    return minutes + ":" + seconds;
  } */

/*   function split() {
    let answer = stringFor(calcFor())
    console.log(answer);
  }

  function stringFor(value) {
    return value.toString();
  }

  function calcFor() {
    return 4*4;
  }

  split(); */