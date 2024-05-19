class Chronometer {
  constructor() {
    // ... your code goes here
  }

  start(callback) {
    setInterval(() => {
      let seconds = printSeconds(60);
      let minutes = printMinutes(60);
  
      minDecElement.innerText = minutes[0];
      minUniElement.innerText = minutes[1];
      secUniElement.innerText = seconds[1];
      secDecElement.innerText = seconds[0];
    }, 1000);
  }

  getMinutes() {
    return chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  }

  getSeconds() {
    return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  }

  computeTwoDigitNumber(value) {
    return chronometer.computeTwoDigitNumber(chronometer.getValue());
  }

  stop() {
    btnLeftElement.innerText = 'STOP';
    btnLeftElement.className = 'btn stop';
  }

  reset() {
    btnRightElement.innerText = 'RESET';
    btnRightElement.className = 'btn reset';
  }

  split() {
    btnRightElement.innerText = 'SPLIT';
    btnRightElement.className = 'btn split';
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
