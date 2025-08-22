class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.milliSeconds = 0; //centesimas
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.milliSeconds += 1; // cada 10 ms se suma 1 centesima

      if (this.milliSeconds === 100) {
      this.currentTime += 1;
      this.milliSeconds = 0;
      }

      if (callback) {
        callback();
      }
  }, 10);
  }

  // mejor hacerlo sin this. no guardas nada extra en el objeto.
  getMinutes() {
    return Math.floor(this.currentTime / 60);
    
  }

  getSeconds() {
    return this.currentTime % 60;
    
  }

  getMilliseconds() {
    return this.milliSeconds;
  }

  computeTwoDigitNumber(value) {
    let valueString = "0" + value 

    return valueString.slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;

    document.getElementById("minDec").innerHTML = "0";
    document.getElementById("minUni").innerHTML = "0";
    document.getElementById("secDec").innerHTML = "0";
    document.getElementById("secUni").innerHTML = "0";
    milDecElement.innerHTML = "0";
    milUniElement.innerHTML = "0";
  }

  split() {
    const mm = this.computeTwoDigitNumber(this.getMinutes())
    const ss = this.computeTwoDigitNumber(this.getSeconds())
    const cc = this.computeTwoDigitNumber(this.getMilliseconds())
    return `${mm}:${ss}:${cc}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
