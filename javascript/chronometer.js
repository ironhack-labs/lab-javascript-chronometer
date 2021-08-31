class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    const incrementOne = () =>{
      this.currentTime++;
    
    }

    this.intervalId = setInterval(incrementOne, 1000)
    
    function callback(){

    }
    
  }

  getMinutes() {
    // ... your code goes here
    let getMins = Math.trunc(this.currentTime / 60)
    console.log(getMins);
    return getMins
  }

  getSeconds() {
    // ... your code goes here
    let getSecs = this.currentTime % 60
    return getSecs
    
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
      let singNumber = value.toString();
      let compNumber = '0';
      if(singNumber.length < 2){
        return compNumber += singNumber;
      }else{
        return singNumber;
      }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
   this.currentTime = 0
  }

  split() {
    // ... your code goes here

    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
