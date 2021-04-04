class Chronometer {
  constructor() {
    this.currentTime = 0,
      this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback()
      }

    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }
  twoDigitsNumber(num) {
    if (num <= 10) {
      return `0${num}`
    }
    return num.toString();
    // + or + 
    //return ´${num}´
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    // way more readable: :)
    // let min = this.twoDigitsNumber(this.getMinutes())
    // let sec = this.twoDigitsNumber(this.getSeconds())
    // return `${min}:${sec}`

    return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds())
  }
}