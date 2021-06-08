class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = nulo;
  }

  start(callback) {
    // ... your code goes here

    if (typeof callback == "undefined") {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
      }, 1000)
    } else {
      retorno da chamada;
    }
  }

  getMinutes() {
    // ... your code goes here

    if (this.currentTime == 0) {
      return 0;
    }
    if (this.currentTime > 59) {
      return (this.currentTime - (this.currentTime % 60)) / 60
    } else {
      return 0;
    }
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime == 0) {
      return 0;
    } else {
      return this.currentTime % 60
    }
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    value = value.toFixed ()
    if (value.lenght === 1) {
      value = "0" + value
      return value
    }
    return value
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())

    return '${minutes}:${seconds}'
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
