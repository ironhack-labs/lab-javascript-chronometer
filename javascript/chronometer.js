class Chronometer {
  constructor( ) {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      if (callback) {
      callback();
      }
      this.currentTime ++
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    //CurrentTime /60 nos va dar el valor en minutos y lo redondemamos com Match.floor para redondear y eliminar el sobrante 
    
   // console.log(Math.floor(this.currentTime / 60));
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    //CurrentTime %60 nos va dar el valor del resto de los minutos sobrantes. 
    //console.log(Math.floor(this.currentTime % 60));
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    //console.log(value.toString().padStart(2,'0'))
    return value.toString().padStart(2,'0')
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
    
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    // console.log(`${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`)
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
