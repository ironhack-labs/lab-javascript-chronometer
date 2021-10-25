class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null

  }

  start(callback) {

    setTimeout(()=>{  
      
      console.log(this.currentTime +=1)
    }, 1000) 

//-----------------------------------
    // // if(currentTime === 3) {
    // //   return 3
    // }
  }




  getMinutes() {
    
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // revisar, por que?

    if (value < 10) return `0${value}`;
    return `${value}`;
  }

  stop() {
    clearInterval(this.intervalId)
  }



  reset() {
    this.currentTime=0
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
