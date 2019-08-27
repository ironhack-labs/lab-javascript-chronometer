class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    
  }
  startClick() {
    this.intervalId = setInterval(() => {this.currentTime ++}, 1000)
  }
  getMinutes() {
    // return (this.currentTime == 0) ? 0 :
    return Math.floor(this.currentTime/60)

  }
  getSeconds() {
    
    return this.currentTime - (Math.floor((this.currentTime)/60)) * 60;
  }
  twoDigitsNumber(digit) {
    let currentTimeString = digit.toString();
    if (currentTimeString.length == 1) {
      return `0${currentTimeString}` 
    } else {
      return `${currentTimeString}`
    }
  }

  stopClick() {
      clearInterval(this.intervalId);
      this.intervalId = null;
  }
  resetClick() {
    this.currentTime = 0
  }
  // splitClick() {}
}