class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => this.currentTime++, 1000)

  }
  getMinutes() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0
    }
    else {
      const minute = Math.trunc(this.currentTime / 60)
      return minute
    }

  }
  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0
    } else {
      const conversion = this.getMinutes() * 60
      const second = this.currentTime - conversion
      return second
    }
  }
  twoDigitsNumber() {
    // ... your code goes here
    const minuteString = this.getMinutes().toString()
    const secondsString = this.getSeconds().toString()
    if (minuteString) {
      if (minuteString < 10) {
        return '0' + minuteString
      } else {
        return minuteString
      }
    }
    if (secondsString) {
      if (secondsString < 10) {
        return '0' + secondsString
      } else {
        return secondsString
      }
    }
    return minuteString + secondsString

  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber()}:${this.twoDigitsNumber()}`
  }
}
