class Chronometer {
  constructor() {
    // ... your code goes here
    currentTime = 0;
    intervalId  = '';
    
    start(stop){
      
        console.log(this.currentTime);
        let i=1;
        this.intervalId = setInterval(function () {
        console.log(i);
          this.currentTime= this.currentTime +i;
        i++;
  
        }, 1000);
    
    }
     stop(){
       clearInterval(this.intervalId);
       this.intervalId='';
    }
  }
}
  
  
  const chn= new Chronometer();
  //console.log(chn.currentTime);
  chn.start();
  chn.stop();

  start(callback) {
    // ... your code goes here
  }

  getMinutes() {
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
