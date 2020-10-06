class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    
    this.intervalId= setInterval(() =>{
      this.currentTime++
      callback
    },1000)
  }
  getMinutes() {
    let minutes = 0
    if(this.currentTime > 59){
      minutes = Math.floor(this.currentTime / 60)
    }
    return minutes
  }
  getSeconds() {
    let seconds = this.currentTime
    if(this.currentTime > 59){
      let secondSeconds = this.currentTime%60
      return secondSeconds
    }
    return seconds
  }
  twoDigitsNumber() {
    let minutes = this.getMinutes()
    let seconds = this.getSeconds()
    if(minutes<10){
      return '0' + minutes
    } else if(seconds <10){
      return '0' + seconds
    } 
  }
  stopClick() {
    clearInterval()
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let minutes = this.getMinutes()
    let seconds = this.getSeconds()
    return `0${minutes}:0${seconds}` 
  }
}
