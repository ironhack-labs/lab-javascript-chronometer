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
  
  twoDigitsNumber(time) {
    if (String(time).length === 1) {
      return `0${time}`
    }
    return String(time)
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
    this.intervalId = 0
  }
  
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes())
    let sec = this.twoDigitsNumber(this.getSeconds())

    return `${min}:${sec}`;
        
  }
}
