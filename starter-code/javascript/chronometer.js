class Chronometer {
  constructor() {
    this.currentTime=0,
    this.intervalId=0
  }
  startClick() {
    this.intervalId =setInterval(() =>{
      this.currentTime+=1
      },1000)
  }
  getMinutes() {
    let minutes= this.currentTime/60
  return parseInt(minutes)
  }
  getSeconds() {
    return this.currentTime % 60
  }
  twoDigitsNumber(value) {
    if(value<10)
    return '0' + value
   else {
    return '' + value
   }
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime=0
    }
  splitClick() {
    const printMin= chronometer.twoDigitsNumber(chronometer.getMinutes())
    const printSec= chronometer.twoDigitsNumber(chronometer.getSeconds())
    return printMin+':'+printSec
  }
}