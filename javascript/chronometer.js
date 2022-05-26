
class Chronometer {

  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    if(callback){
      callback()
    } else {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
    }, 1000)
   }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
    
  }

  getSeconds() {
      return this.currentTime % 60
      
  }

/*   computeTwoDigitNumber(value){
    return String("0" + value).slice(-2)
  } */


  computeTwoDigitNumber(value) {    
    const newNumber = String(value)  
    if (newNumber.length === 1){
      return `0${newNumber}`
    } else {
      return newNumber
    }
  }


  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0 //falta We also need to reset 
    //the values in our HTML file, by using .innerHTML.
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
