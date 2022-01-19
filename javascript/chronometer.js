class Chronometer {
  constructor() {
    
    this.currentTime = 0

    this.intervalId = null
  }

  start(callback) {

    if(callback){

      this.intervalId = setInterval(()=>{   

        callback()
        this.currentTime ++
  
      }, 1000)
    }

    else{
    
      this.intervalId = setInterval(()=>{   

        this.currentTime ++

      }, 1000)
    }
  }

  getMinutes() {

    let minutes = 0

    if(this.currentTime >= 60)
      minutes = Math.floor(this.currentTime / 60)
    
    return minutes
  }

  getSeconds() {
    
    let seconds = 0

    seconds = this.currentTime % 60

    return seconds
  }

  computeTwoDigitNumber(value) {
    
    let number = value.toString()

    if(number.length === 1)
      number = `0${number}`

    return number;
  }

  stop() {

    clearInterval(this.intervalId)

    // this.intervalId = null

    // return this.currentTime
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
