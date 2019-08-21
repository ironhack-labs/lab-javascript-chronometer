class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId
  }
  startClick() {
    this.intervalId = setInterval(() => this.currentTime++, 1000)
  }
  getMinutes() {
    return Math.floor((this.currentTime) / 60)
  }
  getSeconds() {
    return (this.currentTime % 60)
  }
  twoDigitsNumber(numbers) {
    if (numbers < 10)
      return ("0" + numbers.toString())
    else
      return numbers.toString()
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {}

}