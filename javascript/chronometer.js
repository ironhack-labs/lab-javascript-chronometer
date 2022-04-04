class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = null;

  }

  start(callback) {
    setInterval(() => {
      return this.currentTime++;
    },1000);
    
  }

  getMinutes() {
   
    let timeInMinutes = Math.floor(this.currentTime / 60);
    return timeInMinutes;

  }

  getSeconds() {
  let seconds = this.currentTime % 60;
  return seconds;
  }

  computeTwoDigitNumber(value) {
  let final = "  ";
  
  if (final == 0){
    return '00';
  }//else if ( final ==)
  return final;
  }

  stop() {
  clearInterval(this.intervalId);
  }

  reset() {
    
  }

  split() {
    
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
