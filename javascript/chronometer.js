class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    
    this.intervalId = setInterval(() => {
      this.currentTime++
      
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  twoDigitsNumber(currentTime) {
    return currentTime.toLocaleString('es-ES', {minimumIntegerDigits: 2, useGrouping:false})
    
  }
  
  stopClick() {
    return clearInterval(this.intervalId)
  }
  resetClick(currentTime) {
    return clearInterval(this.currentTime = 0)
  }
  splitClick(currentTime) {

    return (`${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`)
    }
    
}


