class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback) {
        callback();
        this.currentTime += 1;
      } else {
        this.currentTime += 1;
      }
    }, 10);
    console.log(this.intervalId);
  }

  getMinutes() {
    //Divido entre 100 porque el currentTime este en mili de 10 y luego entre 60 para pasar a minutos
    return Math.floor(Math.floor(this.currentTime / 100) / 60);
  }

  getSeconds() {
    //Entre 100 porque esta en mili de 10
    if (Math.floor(this.currentTime / 100) < 60) {
      return Math.floor(this.currentTime / 100);
    } else {
      return Math.floor(this.currentTime / 100) % 60;
    }
  }

  getMilliseconds() {
    return Math.round(this.currentTime % 100);
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return '0' + value;
    } else {
      return '' + value;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return (
      this.computeTwoDigitNumber(this.getMinutes()) +
      ':' +
      this.computeTwoDigitNumber(this.getSeconds()) +
      ':' +
      this.computeTwoDigitNumber(this.getMilliseconds())
    );
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
