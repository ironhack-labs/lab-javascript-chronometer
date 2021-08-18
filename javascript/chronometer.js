class Chronometer {
  constructor() {
     this.currentTime = 0;
     this.milli = 0;
     this.intervalId = null; 
  }

  start(func){


    this.intervalId = setInterval(() => {

      this.milli++;
      console.log(this.milli);
      if(this.milli === 100){
         this.currentTime++;
         this.milli = 0;
       }

      if(func){
        func();
      }

    }, 10);

    return this.intervalId;
  }

  getMinutes() {

    return Math.floor(this.currentTime/60);

  }

  getSeconds() {

    return this.currentTime % 60;

  }

  getMilliseconds(){

    return this.milli

  }

  computeTwoDigitNumber(value) {

    if(value > 10){

      return "0" + value;

    }

    return "" + value;

  }

  stop() {

    clearInterval(this.intervalId);

  }

  reset() {

    this.currentTime = 0;
    this.milli = 0;

  }

  split() {

    let sec = this.computeTwoDigitNumber(this.getSeconds);
    let min = this.computeTwoDigitNumber(this.getMinutes);

    return min + ":" + sec;

  }
}



/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
