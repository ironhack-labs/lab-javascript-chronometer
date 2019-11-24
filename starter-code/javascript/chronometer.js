class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = undefined
  }




  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
  }

  getMinutes() {
    let number = this.currentTime / 60
    return Math.floor(number)
  }

  // const minutes = getMinutes();

  getSeconds() {
    if (this.currentTime < 60) {
      return this.currentTime
    } else {
      return this.currentTime % 60
    }
  }
  twoDigitsNumber(value) {
    if (value < 10)
      return `0${value}`;
    else return `${value}`
  }
  stopClick() {}
  // resetClick() {}
  // splitClick() {}
}