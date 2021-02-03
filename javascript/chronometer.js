class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() =>{
      this.currentTime ++;
      if(this.currentTime > 3){
        clearInterval(this.intervalId)
      }
    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    return this.currentTime%60
  }
  twoDigitsNumber() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    if(minutes<10){
      minutes = '0'+ minutes;
    }
    if(seconds<10){
      seconds = '0'+seconds;
    }
    return minutes, seconds
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    return this.currentTime = 0
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes)}:${this.twoDigitsNumber(this.getSeconds)}`
  }
}
