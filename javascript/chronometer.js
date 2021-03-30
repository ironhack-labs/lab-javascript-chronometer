class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      //Llega desde index.js e imprime en el DOM:
      if(callback) callback()
    }, 500)
    //^^cambiar^^

  }

  getMinutes() {
    if (this.currentTime >= 60) {
      return parseInt(this.currentTime / 60)
      //El parseInt() Trunca los decimales, los cuales no necesitamos, solo el entero
    }
    else {return 0}
  }

  getSeconds() {
    let seconds = 0
    if (this.currentTime < 60) {
      seconds = this.currentTime
    }
    else if (this.currentTime >= 60) {
      seconds = (this.currentTime % 60)
    }
    return seconds
  }

  twoDigitsNumber(sentValue) {
    if (sentValue <= 9) {
      return '0' + sentValue
    }
    else if (sentValue > 9) {
      return sentValue
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ':' + this.twoDigitsNumber(this.getSeconds())
  }
}
