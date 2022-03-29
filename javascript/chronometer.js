class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {

    if (callback) { 
        callback()
     
    }
   this.intervalID = this.intervalId = setInterval(() => {
            this.currentTime ++
        }, 1000) 

  }



  getMinutes() {
    
    return (Math.floor(this.currentTime/60))
  }

  getSeconds() {

   

let seconds = this.currentTime % 60

    
    
    

    return (seconds)

  }

  computeTwoDigitNumber(value) {

    
    
    if (value < 10) { return `0${value}` }
    else { return `${value}` }

  }

  stop() {
     clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes()) 
    let seconds = this.computeTwoDigitNumber(this.getSeconds()) 

    return `${minutes}:${seconds}`
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
