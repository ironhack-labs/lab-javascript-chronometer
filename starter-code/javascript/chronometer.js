class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId
  }
  startClick() {
    this.intervalId = setInterval(() => {
      console.log(this.currentTime);
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    if (this.currentTime == 0) {
      return 0
    } else {
      return Math.floor(this.currentTime / 60)
    }
  }

  getSeconds() {
    if (this.currentTime == 0) {
      return 0
    } else {
      return this.currentTime - (this.getMinutes() * 60)
    }
  }

  twoDigitsNumber(value) {
    let string = value.toString()
    if (string.length < 2) {
      string = `0${string}`
    }
    return string
  }
  
  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
  }
  // splitClick() {}
}