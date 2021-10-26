class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
    this.currentMilliseconds = 0;
    this.intervalIdMilliseconds = null;
  }

  start(callback) {
      this.intervalId = setInterval(() => {
        if(callback) callback()
        this.currentTime += 1;
        //console.log(this.currentTime);
      }, 1000);

      this.intervalIdMilliseconds = setInterval(() => {
        if(callback) callback()
        this.currentMilliseconds += 1;
        //console.log(this.currentMilliseconds);
        if (this.currentMilliseconds === 99) {
          this.currentMilliseconds = 0;
        }
      }, 10);
  
      
  }

  getMinutes() {
    let howManyMinutes = this.currentTime / 60;
    let totalMinutes = Math.floor(howManyMinutes); 
    
    return totalMinutes;
    
  }

  getSeconds() {
    return this.currentTime % 60;

  }


  getMilliseconds() {
    return this.currentMilliseconds;
  }

  computeTwoDigitNumber(value) {
    
    let paddedValue = ('0'+value).slice(-2);
    return paddedValue;

  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdMilliseconds);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    
    let paddedMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let paddedSeconds = this.computeTwoDigitNumber(this.getSeconds());
    let paddedMilliseconds = this.computeTwoDigitNumber(this.getMilliseconds());

    let minutesAndSeconds = `${paddedMinutes}:${paddedSeconds}:${paddedMilliseconds}`;
    //console.log(minutesAndSeconds);

    return minutesAndSeconds;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
