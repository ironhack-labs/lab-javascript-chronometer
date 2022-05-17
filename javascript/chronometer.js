class Chronometer {
  constructor() {
    this.currentTime=0
    this.intervalId=null
  }

  start(callback) {
    if(callback){
      callback()
    }else{
      this.intervalId = setInterval( ()=>{
        this.currentTime++
        console.log('->',this.currentTime)
        printTime()
      },1000)
    }
    
  }

  getMinutes(wholeTimeInSeconds) {
    return Math.floor(wholeTimeInSeconds/60)
  }

  getSeconds(wholeTimeInSeconds) {
    return wholeTimeInSeconds%60
  }

  computeTwoDigitNumber(value) {
    return `${this.getMinutes(this.currentTime).toString().padStart(2,'0')}:${this.getSeconds(this.currentTime).toString().padStart(2,'0')}`
  }

  stop() {
    console.log('method Stop()')
    console.log(this.intervalId)
    clearInterval(this.intervalId)
    console.log(this.intervalId)
  }

  reset() {
    
    this.currentTime=0
    Array.from(document.querySelectorAll('.number')).forEach(el=>el.textContent='0')
    console.log('reset',this.currentTime)
  }

  split() {
    return this.computeTwoDigitNumber(this.currentTime)
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}


