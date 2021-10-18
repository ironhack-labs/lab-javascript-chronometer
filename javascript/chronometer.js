class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

  }


  start(callback) {

    //if(callback){}
    //setInterval(callback,delay)
   this.intervalId =  setInterval(()=>{
      this.currentTime++
      if(callback) callback();
    },1000)

  console.log(this.currentTime)
}

  getMinutes() {
    let minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }

  getSeconds() {
   let seconds = this.currentTime % 60;
   return seconds
  }

  computeTwoDigitNumber(value) {
    let zero = '0'
    let doble = ''
    if (value < 10) {
      doble = zero + value.toString();
    } else {
      doble = value.toString();
    }
    return doble;
  }

  stop() {
this.intervalId = clearInterval(this.intervalId) 
 }

  reset() {
this.currentTime = 0  ;
}

  split() {
let minutes = this.computeTwoDigitNumber(this.getMinutes())
let seconds = this.computeTwoDigitNumber(this.getSeconds())
let timeStamp = `${minutes}:${seconds}`;
return timeStamp;
}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
