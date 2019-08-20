function Chronometer() {
  this.currentTime = 0
  this.intervalId = 0
  this.startClick = () => {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
  }
  this.getMinutes = () => {
    const min = Math.floor(this.currentTime / 60)
    return min
  }
  this.getSeconds = () => {
    const sec = this.currentTime % 60
    return sec
  }
  // this.miliseconds = 0
  this.getMiliseconds = () => {
    const msec = this.currentTime - Math.floor(this.currentTime)
    return msec
    // this.miliseconds = setInterval(() => {
    //   this.miliseconds++
    // }, 1)
  }
  this.twoDigitsNumber = number => {
    if (number < 10) {
      return `0${number}`
    } else {
      return `${number}`
    }
  }
  this.stopClick = () => {
    clearInterval(this.intervalId)
  }
  this.resetClick = () => {
    this.currentTime = 0
  }
}
