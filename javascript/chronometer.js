class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    console.log('start')
    this.intervalId = setInterval(() => {
      this.currentTime++
      printTime()
    }, 10);  
  }


  getMinutes() {
    return chronometer.twoDigitsNumber(Math.floor(this.currentTime / 6000))
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime * 0.01) - (60 * this.getMinutes())
    return chronometer.twoDigitsNumber(seconds)
  }

  getMilliseconds(){
    let milis = this.currentTime - (100 * this.getSeconds())
    return chronometer.twoDigitsNumber(milis)
  }
  
  twoDigitsNumber(value) {
    return (value >= 10) ? (value.toString()) : ('0' + value.toString())
  }

  stopClick() {
    console.log('stop')
    clearInterval(this.intervalId)
  }

  resetClick() {
    console.log('reset')
    this.currentTime = 0
  }

  splitClick(){
    console.log('split')
    return (`${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`)
  }
}



