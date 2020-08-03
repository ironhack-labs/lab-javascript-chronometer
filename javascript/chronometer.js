class Chronometer {
  constructor() {
    this.currentTime = 0 
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime +=1, 1000)
    if(callback) {
      callback()
    }
  }
  getMinutes() {
   return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    let seconds = this.currentTime - this.getMinutes() * 60
    return seconds
  }
  twoDigitsNumber() {
    if(this.getMinutes()< 10) {
      return `0 + ${this.getMinutes()}`;
    }
    if(this.getSeconds() < 10) {
      return `0 + ${this.getSeconds()}`;
    }
  }

  stopClick() {
     return clearInterval(this.intervalId)
   }
   resetClick() {
    return this.currentTime = 0;
   }
  splitClick() {
     return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
 }
}