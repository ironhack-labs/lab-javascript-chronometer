class Chronometer {
  constructor() {

    let currentTime = 0;
    let intervalId = null; 

              let i = 1;
          const intervalId = setInterval(function () {
            console.log(i);
          
            i++;
          
            if (i > 10) {
              clearInterval(intervalId);
            }
          }, 1000);

          console.log();
    // ... your code goes here
  }

  start(callback) {



    // ... your code goes here
  }

  getMinutes() {


    
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
