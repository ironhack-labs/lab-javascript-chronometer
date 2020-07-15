class Chronometer {
  constructor() {
    this.currentTime =0;
    this.intervalId=0;
    this.intervalId2=0;
    this.currentMilli=0;
  }
  startClick(callback) {
    this.intervalId = setInterval(()=>{this.currentTime++}, 1000)
    this.intervalId2 = setInterval(()=>{this.currentMilli++}, 10)
    console.log ('started')
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    return Math.floor(this.currentTime%60)
  }
  getMilliseconds() {
    return Math.floor(this.currentMilli%100)
  }

  twoDigitsNumber(number) {
    if (number>=10){return `${number}`}
    else {return `0${number}`}
  }
  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.intervalId2)
    console.log ('stopped')
  }
  resetClick() {
    this.currentTime=0;
    this.currentMilli=0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliseconds())}`
  }
}