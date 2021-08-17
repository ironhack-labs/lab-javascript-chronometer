class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  start(callback){
    
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }


  getMinutes() {

    // Divide 60 and we get a whole number which is the minutes
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {

    // %60 returns the extra minutes
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {

    // We need a 0 in fron of all the numbers from 0 to 9.
    // If value is <10 we add a string 0 and sum the value (num) which turns into a string.
    if (value < 10){
      return "0" + value
    }  else { 
    //else already show number, and transform it to sting.
      return value.toString()};
  }

  stop() {
    //https://www.w3schools.com/jsref/met_win_clearinterval.asp it stops the time
   clearInterval(this.intervalId);
  }

  reset() {
   this.currentTime = 0;
  }

  split() {
    //We get the minutes and the seconds and add them as a string divided by the :
   const min = this.computeTwoDigitNumber (this.getMinutes());
   const sec = this.computeTwoDigitNumber (this.getSeconds());
   const time = (`${min}:${sec}`)
   return time;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
