class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  

  start(callback) {
    setInterval(()=>{
    return this.currentTime +=1
  }, 1000)
  }

  getMinutes() {
 
 
return Math.floor(this.currentTime/ 60)
 
  }

  getSeconds() {
    return this.currentTime%60
  }

  computeTwoDigitNumber(value) {
    const String= value.toString()
    if(String.length<2){
      return `0${String}`
    }else{
      return String
    }
  }

  stop() {
    
    clearInterval(this.intervalId)
  }

  reset() {
    
    this.currentTime=0
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
