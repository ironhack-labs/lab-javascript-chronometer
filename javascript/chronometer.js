class Chronometer {
  constructor(currentTime, intervalID) {
    this.currentTime = 0;
    this.intervalId = null;
   }

  start(callback) {
    this.intervalID = setInterval(() =>{
      this.currentTime ++
      if(callback){
        callback(
          callback()
        )}

    }, 1000);

  }

  getMinutes() {
  
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return Math.floor(this.currentTime% 60)
  }

  computeTwoDigitNumber(value) {
    
    
    if(value < 10){
      return "0"+ value
    }else{
      return "" +value
    }

  }

  stop() {
    clearInterval(this.intervalID)
  }

  reset() {
    this.currentTime = 0;
    
  }

  split() {
    
  let strMin=this.getMinutes();
  let strSec= this.getSeconds();
  let twoCharMin = this.computeTwoDigitNumber(strMin);
  let twoCharSec = this.computeTwoDigitNumber(strSec);
  
   
  return `${twoCharMin}:${twoCharSec}`



  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
