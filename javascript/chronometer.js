class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null

  }

  start(callback) {
    // ... your code goes here

    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
    
    // if(callback){

    //   return 

    // }else{

    //   return 
    // }
    

  }

  getMinutes() {

      let numberOfMinute = parseInt(this.currentTime/60)
    // console.log('......', Math.round(numberOfMinute))

  return numberOfMinute

  }

  getSeconds() {
    
    let numberOfSeconds = this.currentTime%60

    // console.log('......', numberOfSeconds)
    return numberOfSeconds

    //the number of seconds that have passed after the start of the current minute
  }

  computeTwoDigitNumber(value) {
    
    if(value<10){

      return '0'+ String(value)
    }else{
        return String(value)
    }
   
  }

  stop() {
    
    return clearInterval(this.intervalId);

  }

  reset() {
    
     this.currentTime = 0
  }

  split() {
    const priMinut =  this.computeTwoDigitNumber(this.getMinutes())
    const priSecon =  this.computeTwoDigitNumber(this.getSeconds())

    return `${priMinut}:${priSecon}`
    

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
