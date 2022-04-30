class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime=0;
    this.intervalId=null;
  }

  start(callback) {
    // ... your code goes here
    
    this.itervalId= setInterval(()=>{
      this.currentTime+= 1;
    if(callback) callback();
    }, 1000);

  }

  getMinutes() {
    // ... your code goes here
    let minutes = 0;
    return Number(Math.floor(this.currentTime/60))
  }

  getSeconds() {
    // ... your code goes here
    let seconds = 0;
    return Number(this.currentTime%60);
  }

  getMiliseconds(){
    let miliseconds=0;
    return this.currentTime %1000;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    //turn into two-digits number any received value.
    if (value < 10) {
      return 0 + value.toString() 
    } else if (value > 10){
      return value.toString()
    } else if (value === 0){
      return "00"
    }
  }

  stop() {
    // ... your code goes here
    let interval = this.intervalId;
    return clearInterval(interval)
  }

  reset() {
    // ... your code goes here
    this.currentTime=0;
  }

  split() {
    // ... your code goes here
    //"mm:ss"
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const miliseconds = this.computeTwoDigitNumber(this.getMiliseconds());
    
    return  `${minutes}:${seconds}:${miliseconds}`;
  }
  //no es necesario asignarle variable, o agregar miliseconds en este jest
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}