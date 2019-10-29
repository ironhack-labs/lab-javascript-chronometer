class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick() {
    
    const callbackFunction = () => {

      this.currentTime += 1
      }
  
    const interval = setInterval(callbackFunction, 1000)
  
  }

  getMinutes() {
    let convertToMinutes = this.currentTime / 60
    let minutes = parseInt(convertToMinutes)
    return minutes
  }

  getSeconds() {
    let seconds = this.currentTime % 60
    return seconds
  }

  twoDigitsNumber(number) {
    if (number<10) {
      return "0" + number
    } else {
      return ""+number
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    clearInterval(this.currentTime)

  }

  // splitClick() {}
}
