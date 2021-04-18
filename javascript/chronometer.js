class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0; 
  }

  startClick(callback) {
   this.intervalId = setInterval(() => {this.currentTime += 1}, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMiliseconds() {
    return this.currentTime / 1000
  }

  twoDigitsNumber(functionResult) {
    if (this.currentTime < 10) {
      return `0`+  functionResult.toString();
    } else {
      return this.currentTime
    }
    
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {
    const minutes = this.twoDigitsNumber(this.getMinutes())
    const seconds = this.twoDigitsNumber(this.getSeconds())
    return `${minutes}:${seconds}`
  }
}
