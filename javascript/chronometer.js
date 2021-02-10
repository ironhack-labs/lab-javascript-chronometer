class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0 
  }
  startClick(add1ToCurrentTime) {
    this.intervalId = setInterval(() => this.currentTime +=1, 1000)
  }
  getMinutes() {
    let minute = 0
    if (this.currentTime >= 60) {
      minute = Math.floor(this.currentTime / 60)
    }
    return minute
  }
  getSeconds() {
    let second = 0
    if (this.currentTime > 0) {
      second = (this.currentTime % 60) 
    }
    return second
  }
  twoDigitsNumber(value) {
    if (value < 10) {
      return "0"+value
    } else {
      return `${value}` //value.toString()        
    }
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();  
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`
  }
}
