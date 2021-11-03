class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
    this.currentTimeMil = 0;
    this.intervalIdMil = null
    }
    
  start(callback) {
    console.log('start')
    this.intervalId = setInterval(() => {
    this.currentTime ++;
    if (callback) {
      callback()      
    }

    },1000)
  }
  startMil(callback1) {
    console.log('start')
    this.intervalIdMil = setInterval(() => {
    this.currentTimeMil ++;
    if (callback1) {
      callback1()      
    }
    },1)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
    } 

  getSeconds() {
    return (this.currentTime % 60)
  }
  getMilli() {
    return (`${this.currentTimeMil / 100}`)   
  
  }

  computeTwoDigitNumber(value) {
    if (value <= 9) {
      // Se puede acceder como arreglos
      return `0${value}` 
     } else if (value > 9) {
      return `${value}` 
     } else if (condition) {
       
     }
  }

  stop() {
     return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    let mm = this.computeTwoDigitNumber(this.getMinutes());
    let ss = this.computeTwoDigitNumber(this.getSeconds());
    return `${mm}:${ss}`
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}