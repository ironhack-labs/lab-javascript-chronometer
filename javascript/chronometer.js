class Chronometer {
 
  constructor() {
   this.currentTime = 0
   this.intervalId = null;
    
    // ... your code goes here
  }

  start(callback) {
    this.intervalId = setInterval(() => {this.currentTime += 1}, 1000 );

    // ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }

  getSeconds() {
    
    return Math.floor(this.currentTime % 60 );
        // ... your code goes here
  }
  
  twoDigitsNumber() {  
  
       return Math.floor(this.currentTime % 60);
  }
  

  computeTwoDigitNumber(value) {
    // ... your code goes here
  if(value <10) {
    return ('0' +  value.toString());
  }
  else {
    return value.toString();
  }
 
 }
  
  stop() {

    clearInterval(this.intervalId);
  } 
  
    // ... your code goes here
  

  reset() {
   this.currentTime = 0
    // ... your code goes here
  }

  split() {
    let mm = this.computeTwoDigitNumber(this.getMinutes())
    let ss = this.computeTwoDigitNumber(this.getSeconds())
    return `${mm}:${ss}`

  

    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
