class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval( () => {
      this.currentTime += 1;
      // Ponto de dúvida aqui: uso do callback
      if(callback == undefined){}
      else {callback()}
    }, 1000);
  }

  getMinutes() {
    return parseInt(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let number = '0';
    if(`${value}`.length === 1){
      return `${number}${value}`; 
    } else {
      return `${value}`;
    }
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
