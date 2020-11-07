class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    let setTime = 0;
    const interval = setInterval((callback) => {

      this.currentTime += interval
    },1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  
  getSeconds(seconds) {
    return this.currentTime % 60
  }
  twoDigitsNumber(value) {
    if (value < 10) return `0${value}`;
    return `${value}`;
   }

  stopClick() {
    return clearInterval(this.intervalId)
  }

  resetClick() {
    return this.currentTime = 0
  }

  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`
  }
}