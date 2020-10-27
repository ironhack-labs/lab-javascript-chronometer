class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }


  startClick(callback) {
    setInterval(() => this.currentTime += 1, 1000)
  }

  getMinutes() {
    if (this.currentTime <= 0) {
      return 0
    } else {
     return Math.floor(this.currentTime / 60)

    }
  
  }
  getSeconds() {
      if (this.currentTime <= 0) {
      return 0
      } else {
        return Math.floor((this.currentTime / 60) * 60)
      }
  }
  
  twoDigitsNumber() {



  }
  stopClick() {
    clearInterval(this.intervalId)

  }
  resetClick() {
    this.currentTime = 0

  }
  splitClick() {


    // ... your code goes here
  }
}
