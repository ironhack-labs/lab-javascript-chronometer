class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
    }, 1000);
  }
  getMinutes() {
      const minutes = Number((Math.floor(this.currentTime / 60)).toFixed(0))
      return minutes
  }
  getSeconds() {
      return this.currentTime % 60
  }
  twoDigitsNumber(item) {
    let result = ''
    if (item <10) {
      result = '0' + item
    }else{
      result = item.toString(10)
    }

    return result
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  // splitClick() {}
}