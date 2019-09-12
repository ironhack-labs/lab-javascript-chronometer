class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
    this.minutes = 0;
    this.seconds = 0;
    this.split
    this.splitArray = []
  }
  
  startClick(func1) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      this.getMinutes();
      this.getSeconds();
      func1()
    }, 1000);
  }

  getMinutes() {
    let minuteCounter = this.currentTime
    if (minuteCounter % 60 === 0) {
      this.minutes += 1;
    }
  }

  getSeconds() {
    let secondCounter = this.currentTime
    this.seconds = secondCounter - (this.minutes * 60)
  }

  twoDigitsNumber(time) {
    let twoDigits
    if (time < 10) {
      twoDigits = "0" + time
    } else {
      twoDigits = time.toString()
    }
    return twoDigits
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0;
    this.minutes = 0
    this.seconds = 0
    this.splitArray = []
  }

  splitClick() {
    let splitSeconds = this.twoDigitsNumber(this.seconds)
    let splitMinutes = this.twoDigitsNumber(this.minutes)
    let splitTime = `${splitMinutes}:${splitSeconds}`
    this.splitArray.push(splitTime)
  }
}
