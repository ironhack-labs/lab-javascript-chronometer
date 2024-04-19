class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
    this.milliseconds = 0;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.milliseconds++; //aumente de 1 en 1
      if (this.milliseconds % 100 === 0) {
        this.currentTime++; // Incrementamos los milisegundos cada 10 segundos
      }
      if (callback) { // si hay un callback
        callback(); 
      }
    }, 10); // cada 1 segundo

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
   return this.currentTime % 60;
  }
  getMilliseconds() {
    return this.milliseconds % 100; 
  }

  computeTwoDigitNumber(value) {
   let response;
    if (value < 10) {
     response = '0' + value.toString();
   } else {
     response = value .toString();
   }
   return response;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.milliseconds = 0;
  }

  split() {
  const minutes = this.computeTwoDigitNumber(this.getMinutes());//debe devolver "mm"
  const seconds = this.computeTwoDigitNumber(this.getSeconds());//debe devolver "ss"
  const milliseconds = this.computeTwoDigitNumber(this.getMilliseconds()); 
  //debe devolver "mm:ss"
  return `${minutes}:${seconds}:${milliseconds}`; 
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
