class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.currentMiliseconds = 0;
  }

  start(callback) {
    if (!this.intervalId){
      this.intervalId = setInterval(() => {
        this.currentMiliseconds+=10;
        if(this.currentMiliseconds === 1000){
          this.currentMiliseconds = 0;
          this.currentTime ++;
        }
        if(callback){
        callback();
        }
      }, 10);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }
  getMilliseconds() {
    return this.currentMiliseconds;
  }
  computeTwoDigitNumber(value) {
    return (value < 10? '0' + value : value.toString()).slice(-2);
  }
  computeThreeDigitNumber(value) {
    const cent = Math.floor(value / 100);
    const dec = Math.floor((value % 100) / 10);
    const decZero =(dec=== 0 && cent===0) ? '0' : dec.toString();
    const centZero = (cent === 0 && dec ===0)? '0' : cent.toString();
    return centZero + decZero; 
   }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;
    this.currentMiliseconds = 0;
    printTime();
  }

  split() {
    const minuts = this.computeTwoDigitNumber(this.getMinutes());
    const seconds=this.computeTwoDigitNumber(this.getSeconds());
    const miliseconds = this.computeThreeDigitNumber(this.getMilliseconds());
    return `${minuts}:${seconds}:${miliseconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
