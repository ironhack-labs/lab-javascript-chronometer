class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }
  start() {
    // ... your code goes here
    this.intervalId = setInterval(this.currentTime+=1,1000)
  }
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime%60
  }
  computeTwoDigitNumber(value) {
    // ... your code goes here
    const Numero = value.toString()
    if(Numero.length === 1 ){
      return `0${Numero}`
    } else {
      return Numero
    }
  }
  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }
  reset() {
    // ... your code goes here
    this.currentTime = 0
  }
  split() {
    // ... your code goes here
    const minutos = this.computeTwoDigitNumber(this.getMinutes())
    const seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutos}:${seconds}`
  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}