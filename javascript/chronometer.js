class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {



    this.intervalId = setInterval(() => {

      if (callback) {
        callback()
      }

      this.currentTime++;

    }, 1000);


  }


  getMinutes() {
    let min = this.currentTime / 60
    return parseInt(min);
  }

  getSeconds() {
    let seg = this.currentTime % 60
    return seg;
  }

  computeTwoDigitNumber(value) {


    if (value < 10) {
      return "0" + value
    } else {
      return String(value);
    }

  }

  stop() {

    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {

    let min=this.computeTwoDigitNumber(this.getMinutes())
    let se=this.computeTwoDigitNumber(this.getSeconds())
    return min+":"+se;


  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
