class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    console.log('start')
    this.intervalId = setInterval(() => this.currentTime++, 1000);  
  }
  getMinutes() {
    let minutes = 0
    minutes = Math.floor(this.currentTime / 60)
    return minutes
  }
  getSeconds() {
    let seconds = 0
    seconds = this.currentTime - Math.floor(this.getMinutes() * 60)
    return seconds
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
