class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId= null // ... your code goes here
  }

  start(callback) {
    this.intervalId = setInterval(() =>{
     this.currentTime++;
      } , 1000)

  }
  getMinutes() {
   this.start()   
    const minutes = this.currentTime/60
    
    return Math.floor(minutes)
    // ... your code goes here
  }

  getSeconds() {
    this.start()
    const seconds = this.currentTime % 60
    return (Math.floor(seconds))// ... your code goes here
  }

  computeTwoDigitNumber(value) {
    const decimalNumber = value.toString()
     if(decimalNumber.length<=1)
    {return '0'+value;}
     else { return decimalNumber;}
  }

  stop() {
    return clearInterval(this.intervalId) 
  }

  reset() {
    return this.currentTime = 0
    
  }

  split() { 
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`// ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

const time = new Chronometer
time.getMinutes()