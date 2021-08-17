class Chronometer {
  constructor() {
     this.currentTime = 0;
     this.intervalId = null; 
  }

  start(func){

    // let i = 0;

    this.intervalId = setInterval(() => {

      // i++;

      this.currentTime++;

      if(func){
        func();
      }
      console.log(this.currentTime);

    }, 1000);

    return this.intervalId;
  }

  getMinutes() {

    return Math.floor(this.currentTime/60);

  }

  getSeconds() {

    return this.currentTime % 60;

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
