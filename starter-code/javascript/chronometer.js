class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    return (this.currentTime - (this.getMinutes() * 60));
  }
  twoDigitsNumber(x) {
    if (x < 10) {
      return (`0${x}`)
    } else {
      return (`${x}`) 
      }
  }
  stopClick() {
    clearInterval(this.currentTime)
  }
  resetClick() {
    this.currentTime=0
  }
  // splitClick() {}
}