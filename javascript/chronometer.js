class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(callback) {
    let x = setInterval(() => this.currentTime++, 1000);
    this.intervalId = x;
    //function time_keeping(){
    //  this.currentTime++;}
    //this.intervalId = setInterval(time_keeping,1000);
    
    
    // ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime%60
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value.toString().length === 1){
      return `0${value}`}
    else{
      let p = value.toString();
      console.log(p)
      return p;
    }
    }
    // ... your code goes here
  

  stop() {
    clearInterval(this.intervalId)
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    //let func = this.computeTwoDigitNumber;
    let p =  this.computeTwoDigitNumber(this.getMinutes());
    console.log(p)
    let p2 = this.computeTwoDigitNumber(this.getSeconds());
    
    return `${p}:${p2}`;
    // ... your code goes here
  }
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

