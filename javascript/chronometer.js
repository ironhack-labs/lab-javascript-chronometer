class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0 ;
    this.intervalId = null;
    
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
    this.currentTime++;
    },1000)
  }
  
  getMinutes() {
    // ... your code goes here
    let min = this.currentTime/60;
    return Math.floor(min);
  }

  getSeconds() {
    // ... your code goes here
    let sec =this.currentTime%60;
    return sec;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value<10){
       return 0 + value.toString()
    }else{
      return value.toString();
    }
  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId);
     
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0;
  }

  split() {
    // ... your code goes here

    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let second = this.computeTwoDigitNumber(this.getSeconds());
    
    return minutes+':'+second;
    }

  
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
