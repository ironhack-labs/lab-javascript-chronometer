class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
 
  startClick(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      printTimeCallback()
    }, 10)
  }
 
  getMinutes() {
    return Math.floor(this.currentTime / 6000)
  }
 
  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60
  }
 
  getMiliseconds() {
    return this.currentTime % 100
  }

  twoDigitsNumber(number) {
    return (number < 10) ? `0${number}` : `${number}`
  }
  
  stopClick() {
    clearInterval(this.intervalId)
  }
  
  resetClick(printTimeCallback) {
    this.currentTime = 0
    printTimeCallback()
  }
  
  splitClick() {
    let twoDigMin = this.twoDigitsNumber(this.getMinutes())
    let twoDigSec = this.twoDigitsNumber(this.getSeconds())
    let twoDigMilSec = this.twoDigitsNumber(this.getMiliseconds())

    return twoDigMin + ':' + twoDigSec + ':' + twoDigMilSec
  }
}
