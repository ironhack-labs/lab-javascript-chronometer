class Chronometer {
  constructor(currentTime=0,intervalId = null) {
    this.currentTime = currentTime;
    this.intervalId = intervalId;
  }

  start(callback) {
    let intervalId;
    let update
    if(callback){
      update = callback;
    }
    intervalId = setInterval(() => {
      this.currentTime++;
      if (update) update();
    }, 1)
  
    this.intervalId = intervalId; // idk about this
    return intervalId;
  }
  
  getMinutes() {
    const minutes = Math.floor((Math.floor(this.currentTime / 100) / 60));
    return this.computeTwoDigitNumber(minutes);
  }

  getSeconds() {
    const seconds = Math.floor(this.currentTime / 100) % 60;
    return(this.computeTwoDigitNumber(seconds));
  }

  getMiliSeconds(){
    const miliSeconds = this.currentTime % 100;
    return this.computeTwoDigitNumber(miliSeconds);
  }

  computeTwoDigitNumber(value) {
    if(value > 9){
      return value.toString();
    }else{
      return ('0'+value);
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = (this.getMinutes());
    const seconds = (this.getSeconds());
    const miliSeconds = (this.getMiliSeconds());
    return (minutes+":"+seconds+":"+miliSeconds);
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}