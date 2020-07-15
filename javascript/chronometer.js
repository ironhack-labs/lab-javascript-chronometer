class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1
    }, 1000)
  }
  
  getMinutes() {
    if(this.currentTime === 0) {
      return 0
    }
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    if(this.currentTime === 0) {
      return 0
    }
    return Math.floor(this.currentTime - this.getMinutes() * 60)
  }

  twoDigitsNumber(num) {
     return  ("0" + num).slice(-2);
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();

    return `${("0" + min).slice(-2)}:${("0" + sec).slice(-2)}`
  }
}
