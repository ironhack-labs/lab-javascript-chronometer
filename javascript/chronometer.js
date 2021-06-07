class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start () {
    this.intervalId = setInterval(() => {
    this.currentTime++;
    console.log(this.currentTime);
  },1000);
  }

  getMinutes() {
    return parseInt(Math.floor(this.currentTime / 60));
  }

  getSeconds() {
    return parseInt(this.currentTime % 60);
  }

  computeTwoDigitNumber(valor) {
    return (`0` + valor).slice(-2);
   }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let min = this.computeTwoDigitNumber(this.getMinutes());
    let sec = this.computeTwoDigitNumber(this.getSeconds());

    return `${min}:${sec}`;
  }
  
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
