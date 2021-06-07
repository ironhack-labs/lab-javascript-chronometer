class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

  }

  start(callback) {
    
    if (typeof callback == "undefined"){
      this.intervalId = setInterval(()=>{
          this.currentTime += 1;
      },1000)
    }else{
      callback;
    }
  }


  getMinutes() {
    if (this.currentTime == 0){
      return 0
    }
    if(this.currentTime > 59){
      return (this.currentTime - (this.currentTime % 60))/60
    }else{
      return 0
    }
  }

  getSeconds() {
    if (this.currentTime == 0){
      return 0
    }else{
      return this.currentTime%60
    }
  }

  computeTwoDigitNumber(value) {
    value = value.toFixed()
    if (value.length === 1 ){
      value = "0" + value
      return value
    }
    return value
  }

  stop() {
    clearInterval(this.intervalId)
    
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())

    return `${minutes}:${seconds}` 
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
