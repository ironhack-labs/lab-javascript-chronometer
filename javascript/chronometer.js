class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null 
  }

  start(callback) {
    this.intervalId = setInterval(()=>{
       this.currentTime++;
       if (callback) callback();
    }, 1000); 
  }

  getMinutes() {
    const numberOfMinutes = Math.floor(this.currentTime / 60)
    return numberOfMinutes 
  }

  getSeconds() {
    const numberOfSeconds = Math.floor(this.currentTime % 60)
    return numberOfSeconds
  }

  computeTwoDigitNumber(value) {
    const newString = value.toString()
   if(newString.length < 2){
     return `0${newString}`
   }else {
     return newString
   }
  }

  stop() {
    clearInterval(this.intervalId)
   }

  reset() {
    this.currentTime = 0
  }

  split() {
   let minutes= this.computeTwoDigitNumber(this.getMinutes());
   let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
