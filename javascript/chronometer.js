class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = 0
  }

  startClick(callback) {

    this.intervalId = setInterval ( elm => {
       this.currentTime ++
     }, 1000)
     
     // callback
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime/60)
    return minutes
  }
  getSeconds() {
    const seconds = this.currentTime % 60
    return seconds
  }
  twoDigitsNumber(number) {
    let stringNumber
    if (number < 10) {
      stringNumber = '0' + number
    }
    else {
      stringNumber = number.toString()
    }
    return stringNumber
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    const minutes = this.getMinutes()
    const seconds = this.getSeconds()
    const minutes2d = this.twoDigitsNumber(minutes)
    const seconds2d = this.twoDigitsNumber(seconds)

    const split = minutes2d + ':' + seconds2d

    return split
  
  }
}
