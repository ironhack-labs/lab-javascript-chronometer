class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(callback) {
    // ... your code goes here
   this.intervalId = setInterval(()=>{
     if (callback != undefined)
     {
      callback();
     }
     else{
        this.currentTime += 1;
        this.intervalId
     }
 
    },10)
  }

  getMiliSeconds(){
    
    return Math.round(this.currentTime%100)

  }

  getMinutes() {

    return Math.floor(this.getSeconds()/60)
    // ... your code goes here
  }

  getSeconds() {
    return Math.floor(this.currentTime/100)
  }

  computeTwoDigitNumber(value) {
    if (value.toString().length === 1)
    {
      return("0"+value.toString())
    }
    else
    {
      return (value.toString())
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
    
  }

  reset() {
    this.currentTime = 0;
    if(document.querySelector("#split-list") !=null)
    {
      document.querySelector("#split-list").innerHTML = "";
    }
    
  }

  split() {
    console.log (this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds()) + ":" + this.computeTwoDigitNumber(this.getMiliSeconds()))
    return (this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds()) + ":" + this.computeTwoDigitNumber(this.getMiliSeconds()))
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
