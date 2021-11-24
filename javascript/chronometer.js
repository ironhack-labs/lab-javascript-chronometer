class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
<<<<<<< HEAD
      console.log(this.currentTime++)
    }, 1000);
=======
      this.currentTime++
    }, 1000)
>>>>>>> 7f9a579b4e83d0be6e4ea5620045e0e2846970cd
  }

  getMinutes() {
    return this.currentTime < 60 ? 0 : Math.floor(this.currentTime / 60)
  }

  getSeconds() {
<<<<<<< HEAD
    return this.currentTime < 60 ? this.currentTime : this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    return value > 10 ? value.toString() : `0${value}`
=======
    return this.currentTime < 60 ? this.currentTime : Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : value.toString();    
>>>>>>> 7f9a579b4e83d0be6e4ea5620045e0e2846970cd
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
<<<<<<< HEAD
    return this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
=======
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
>>>>>>> 7f9a579b4e83d0be6e4ea5620045e0e2846970cd
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
