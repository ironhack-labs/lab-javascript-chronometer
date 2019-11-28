class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = 0
  }
  
  startClick() {
    this.intervalId = setInterval(function() {
      this.currentTime ++;
    }.bind(this),1000)
  }

  getMinutes() {
    let minutes = this.currentTime/60;
    return Math.floor(minutes)
  }

  getSeconds() {
    let seconds = this.currentTime - (this.getMinutes() * 60);
    return seconds;
  }

  twoDigitsNumber(number) {
    return number.toString().padStart(2, '0')
  }

  stopClick() {
    clearInterval(this.intervalId)
    this.intervalId = 0
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds());
  }
}