class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = 0
  }
  
  startClick() {
    this.intervalId = setInterval(function() {
      this.currentTime ++;
    }.bind(this),10)
  }

  getMinutes() {
    let minutes = this.currentTime/6000;
    return Math.floor(minutes)
  }

  getSeconds() {
    let seconds = (this.currentTime - (this.getMinutes() * 6000))/100;
    return Math.floor(seconds);
  }

  getMilliseconds () {
    let milliseconds = this.currentTime - this.getSeconds()*100 - (this.getMinutes() * 6000);
    return milliseconds;
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
    return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds()) + ":" + this.twoDigitsNumber(this.getMilliseconds());
  }
}