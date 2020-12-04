class Chronometer {

  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      printTime()
    }, 10);  
  }


  getMinutes() {
    let minutes = Math.floor(this.currentTime / 6000)
    return chronometer.twoDigitsNumber(minutes)
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime * 0.01) - (60 * this.getMinutes())
    return chronometer.twoDigitsNumber(seconds)
  }

  getMilliseconds(){
    let milis = Math.floor(this.currentTime - (100 * this.getSeconds() + 6000 * this.getMinutes()))
    return chronometer.twoDigitsNumber(milis)
  }
  
  twoDigitsNumber(value) {
    return (value >= 10) ? (value.toString()) : ('0' + value.toString())
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
    clearSplits()
    printTime()
  }

  splitClick(){
    console.log('split')
    printSplit(`${this.getMinutes()}:${this.getSeconds()}:${this.getMilliseconds()}`)
  }
}



