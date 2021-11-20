class Chronometer {
  constructor() {
   
    this.currentTime = 0;
    this.intervalId = null;
  

    // ... your code goes here
  }

  start(callback) {

    this.intervalId = setInterval(()=> {
    this.currentTime++;
    },1000);

    return this.currentTime;
    // ... your code goes here
  }

  getMinutes() {

    return Math.floor((this.currentTime/60))
    // ... your code goes here
  }

  getSeconds() {

    return Math.floor((this.currentTime%60))
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {

  if (value > 9)
  {return value.toString()}
else

 {   return ('0' + value)}


 /*

 if (value.toString().length > 1){
      return value.toString()
    } else{
      return (‘0’ + value)
    }

 */

    


    //input.Substring(input.Length - 2, 1);


    // ... your code goes here
  }

  stop() {

    clearInterval(this.intervalId)
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0

    clearInterval(this.curren)
  }

  split() {
  
return `${this.computeTwoDigitNumber(this.getMinutes(this.currentTime))}:${this.computeTwoDigitNumber(this.getSeconds(this.currentTime))}`;
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
