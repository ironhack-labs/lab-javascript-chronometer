class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId= null;
  }

  start(callback) {
    this.intervalId= setInterval ( ()=> {
      if (callback){
        return null 
      }
      this.currentTime++

    },1000);
     
  }

  getMinutes() {
    
    return Math.floor(this.currentTime /60)
    
    
  }

  getSeconds() {
    
    return this.currentTime%60
  }

  computeTwoDigitNumber (value) {
    let stringNumber = String(value);

    if (stringNumber.length <= 1){
      return "0" + stringNumber
    }else if ( value === 0){
      return "00"
    }
    return stringNumber.slice(0,2)
   }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime=0;
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
