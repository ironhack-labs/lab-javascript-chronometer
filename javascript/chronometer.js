class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null; 
  }

  start(callback){

    let i = 0;

   this.intervalId = setInterval(() => {
      this.currentTime++;
      i++;

      if(callback){
        callback(i)

      }
      console.log(this.currentTime);
    }, 1000);
    
    return intervalId;
  }



  getMinutes() {

    return Math.floor(this.currentTime / 60);
    
    // ... your code goes here
  }

  getSeconds() {

    return this.currentTime % 60;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value > 10) {
    return '0' + value 
  }
  reutnr `$(value)`;
}

  stop() {
    clearInterval(this.intervalId);



    // ... your code goes here
  }

  reset() {

    this.currentTime = 0;

    // ... your code goes here
  }

  split() {

    const currentMinutes = this.computeTwoDigitNumber(this.getMinutes());
    const currentSeconds = this.computeTwoDigitNumber(this.getMinutes());

    return `$(minutes):$(seconds)`;
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
