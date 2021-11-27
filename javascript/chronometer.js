class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
 

  start() {
    this.intervalId = setInterval(() => {
    this.currentTime += 1;}
    , 1000);
  }
  

  getMinutes() {
    let minutes = Number(Math.floor(this.currentTime/60));
    return minutes;
  }


  getSeconds() {
    let seconds = Number(Math.floor(this.currentTime % 60));
    return seconds;
  }


  computeTwoDigitNumber(value) {
    let str = value.toString();
    if (value === 0){
      return "00" ;
    }
    if (value >= 10){
      return str ;
    }
    if (value < 10){
      return "0" + str;
    }
   
  }


  stop() {
    
    clearInterval(this.intervalId);
     
  }
      

  reset() {
    return this.currentTime = 0;
  }


  split() {
    const splitTime = `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
    return splitTime;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
