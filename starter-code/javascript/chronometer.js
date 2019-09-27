class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000)
  }

  getSeconds() {
    return Math.floor((this.currentTime - (this.getMinutes()*6000))/100)
  }

  getMilliSeconds() {
    return (this.currentTime - (this.getSeconds()*100) - (this.getMinutes()*6000))
  }

  twoDigitsNumber(num) {
    if (num < 10) {
      return '0' + num
    } else {
      return `${num}`
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.stopClick()
    this.currentTime = 0
  }

  splitClick() {
  }
}