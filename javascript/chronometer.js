class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.currentMilisecond = 0;
    this.intervalIdMilisecond = null;

  }

  start(callback) {
    
    this.intervalId = setInterval(() => {
      
      
      if(callback) callback()
      this.currentTime += 1;
      
    }, 1000);

    this.intervalIdMilisecond = setInterval(() => {
      if(callback) callback()
      this.currentMilisecond += 1;
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    
    return Math.floor(this.currentTime % 60 )
  }

  getMiliseconds() {
    
    return Math.floor(this.currentMilisecond % 100 )
  }

  computeTwoDigitNumber(value) {
     
    let numbersToString = value.toString()
    
     if (numbersToString.length ===1 ){
      return "0" + numbersToString
    } 
    
    return numbersToString  
  }

  stop() {

    clearInterval(this.intervalId)
    clearInterval(this.intervalIdMilisecond)
  }

  reset() {
    this.currentTime = 0;
    this.currentMilisecond = 0;

  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    let miliseconds = this.computeTwoDigitNumber(this.getMiliseconds())
    return `${minutes}:${seconds}:${miliseconds}`
    
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
