class Chronometer {
  constructor() {
    this.currentSec = 0;
    this.intervalId = null;
    this.splitArray = [];
    this.currentMilisec = 0;
    this.intervalForMilisecondsID = null;
  }

  start(callback) {
    // ... your code goes here
    if (callback) callback();
    console.log('Has pulsado Start');
    //this.intervalId = setInterval(funcion = lo que va a pasar, temporizador = cada cuánto va a pasar);
    this.intervalId = setInterval(() => {
      this.currentSec++;
    }, 1000);
    this.intervalForMilisecondsID = setInterval(() => {
      this.currentMilisec++;
      if (this.currentMilisec >= 100) {
        this.currentMilisec = 0;
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentSec / 60);
    // ('62/60 -> 1.05... Math.floor-> 1');
  }

  getSeconds() {
    return this.currentSec % 60;
    // ('62/60 -> 2');
  }

  getMiliseconds() {
    return this.currentMilisec;
  }

  computeTwoDigitNumber(value) {
    let str = '0' + value.toString() + '0';
    if (str.length === 3) {
      return str.slice(0, 2);
    }
    return str.slice(1, 3);
  }

  stop() {
    console.log('Has pulsado Stop');
    clearInterval(this.intervalId);
    clearInterval(this.intervalForMilisecondsID);
  }

  reset() {
    this.currentSec = 0;
    this.currentMilisec = 0;
  }

  split() {
    this.splitArray = [
      this.computeTwoDigitNumber(this.getMinutes()),
      this.computeTwoDigitNumber(this.getSeconds()),
      this.computeTwoDigitNumber(this.getMiliseconds())
    ];
    return `${this.splitArray[0]} : ${this.splitArray[1]} : ${this.splitArray[2]}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
