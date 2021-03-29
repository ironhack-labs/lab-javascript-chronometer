class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
 
  startClick(callback) {
    let currentTime = 1;
    let intervalId = setInterval(() => {
  console.log(currentTime);
  this.currentTime += 1;
}, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  twoDigitsNumber(time) {
    if (time < 10) {
    return '0' + time}
    else {return String(time)}
  }

  stopClick() {
    return clearInterval(this.intervalId);
  }

  resetClick() {
    return this.currentTime = 0;
  }

  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
