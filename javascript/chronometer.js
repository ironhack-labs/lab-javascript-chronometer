class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick () {
    setInterval((startClick) => { this.currentTime++ }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  twoDigitsNumber(num) { 
    if (num >= 10){ return num.toString() }
    return "0" + num.toString()
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let min = chronometer.getMinutes();
    let sec = chronometer.getSeconds();
    return `${min}:${sec}`
  }
}
