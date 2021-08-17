class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentMiliseconds = 0;
    this.intervalId = null;
    this.miliSecondId = null;
  }
  
  start(callback) {
    if(!callback){
    this.intervalId = setInterval(()=>{ 
      this.currentTime++;
    },1000);
    this.miliSecondId = setInterval(()=>{
    this.currentMiliseconds ++;
    }, 1);
    } else {
      this.intervalId = setInterval(()=>{ 
        callback ();
        this.currentTime++;
      },1000);
      this.miliSecondId = setInterval(()=>{ 
        callback ();
        this.currentMiliseconds++;
      },1);
    }
  }

  getMinutes() {
    let minutes = 0;
    minutes =  Math.floor(this.currentTime / 60 ); 
    return (minutes);
  }
  getSeconds() {
    let seconds = 0;
    seconds = this.currentTime % 60;
    return (seconds);
  }

  getMiliseconds() {
    let miliseconds = 0;
    miliseconds = this.currentMiliseconds % 100;
    return (miliseconds);
  }

  computeTwoDigitNumber(value) {
    let numString = value.toString();
    if(numString.length < 2) {
      numString = '0' + numString}
    return (numString)
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.miliSecondId);
  }

  reset() {
    this.currentTime = 0;
    this.currentMiliseconds = 0;
  }

  split() {
    let message = "";
    let minutes = this.getMinutes ();
    let seconds = this.getSeconds ();
    minutes = this.computeTwoDigitNumber (minutes);
    seconds = this.computeTwoDigitNumber (seconds);
    message = minutes + ":" + seconds;
    return (message);
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
