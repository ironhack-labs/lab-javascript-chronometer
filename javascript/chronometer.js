class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    
  }

   start(printTime) {
    this.intervalId = setInterval(() =>{
      this.currentTime++
      printTime()
 
  }, 1000)
   return this.currentTime += 1

}

  getMinutes() {
      return parseInt(Math.floor(this.currentTime / 60))
  }

  getSeconds() {
    return parseInt(this.currentTime % 60);
  
  }

  computeTwoDigitNumber(value) {
    if (this.currentTime < 10) {
      return "0" + this.currentTime;
    }
  }


  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());

    return `${min}:${sec}`;
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
