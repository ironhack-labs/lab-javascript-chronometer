class Chronometer {
  constructor(){
    this.currentTime = 0;
    this.intervalId = 0;
  }
  
  startClick(callback) {
      this.intervalId =  setInterval(() => {
      this.currentTime++;
    },1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }
  twoDigitsNumber() {
    return '0' + this.currentTime.toString().slice(-2)
  }
  stopClick() {
    debugger
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    return `0${this.getMinutes()}:0${this.getSeconds()}`
  }
}