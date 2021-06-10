class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.milliseconds = 0;
    this.msId = null;
  }

  start(callback) {
    if(callback){
      this.intervalId = setInterval(() => {
          this.currentTime ++
          callback()
    }, 1000)
    }
    else{
      this.intervalId = setInterval(() => {
        this.currentTime ++
    }, 1000)
   }
  }
  

  getMinutes() {
    let minute = 0;
    let secCount = this.currentTime;
    if(secCount == 0){
      return 0;
    }
    else{
   minute = Math.floor(secCount/60)
  } 
  return minute
}

  getSeconds() {
    let seconds = 0;
    if(this.currentTime % 60 !== 0){
      seconds = this.currentTime % 60
    }
    return seconds;
  }

  getMilliseconds(){
    let ms = this.milliseconds;
    this.msId = setInterval(() => {
      ms += 1
      if(ms == 100){
        ms = 0;
      } 
    }, 10); 
    return ms;
  }  
    
  computeTwoDigitNumber(value) {
    let str = value.toString()
    let newStr = '';
    if(str.length < 2){
      newStr = '0'+ str
    }
    else{
      return str;
    }
    return newStr;
  }

  stop() {
    clearInterval(this.intervalId)
    clearInterval(this.msId)
  }

  reset() {
    this.currentTime = 0;
    this.milliseconds = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    let milliseconds = this.computeTwoDigitNumber(this.getMilliseconds())
    let display = `${minutes}:${seconds}:${milliseconds} `
    return display;
  }

}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
