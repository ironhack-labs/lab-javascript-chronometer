class Chronometer {
  constructor() {

    this.currentTime =0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(callback) { 
  
   this.intervalId= setInterval(()=>{
      
      if(callback) {callback();}
     return this.currentTime++;
    
      
     
    }   
    ,1000)
  





      }

  getMinutes() {

   
     return Math.floor(this.currentTime/60)
     
   
    
    // ... your code goes here
  }

  getSeconds() {
     console.log("He entrado a getSeconds")
    return this.currentTime % 60;
    
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    let valueString= value.toString();
    
       if(valueString.length == 1) {return 0+valueString}
       else {return valueString}



    // ... your code goes here
  }

  stop() {
clearInterval(this.intervalId)


    // ... your code goes here
  }

  reset() {

    this.currentTime =0;
    // ... your code goes here
  }

  split() {
    
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    return this.computeTwoDigitNumber(minutes)+":"+this.computeTwoDigitNumber(seconds);
    
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
