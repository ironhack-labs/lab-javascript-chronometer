class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(()=> {
      this.currentTime++;
      if(callback) callback(callback)
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000);
  }

  getSeconds() {
    console.log(this.currentTime)
    return Math.floor(this.currentTime/100)%60
  }

  getMilliseconds() {
    return this.currentTime%100
  }

  computeTwoDigitNumber(value) {
    if(value <= 9) return `0${value}`;
    return value.toString()
  }

  stop() { 
    return clearInterval(this.intervalId);
  }

  reset() {
    
    let elements = document.getElementsByClassName('number')
    // I don't know why with a for loop it doesn't work, so I used while
    let i = 0;
    while(i < elements.length){
      elements[i].innerHTML = '0'
      i++
    }
    document.getElementById('milDec').innerHTML = '0'
    document.getElementById('milUni').innerHTML = '0'
    
    this.currentTime = 0;
  }

  split() {
    let min = this.computeTwoDigitNumber(this.getMinutes())
    let sec = this.computeTwoDigitNumber(this.getSeconds())
    let milSec = this.computeTwoDigitNumber(this.getMilliseconds())
    return `${min}:${sec}:${milSec}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
