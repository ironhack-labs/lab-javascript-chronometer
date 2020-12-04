class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.intervalMiliId = 0
    this.currentMil = 0
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      callback()
    }, 1000)
  }
  
  getMinutes() {
    return Math.floor(this.currentTime/ 60)
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

  resetClick(callback) {
    this.currentTime = 0
    this.intervalId = 0
    callback();
  }
  
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes())
    let sec = this.twoDigitsNumber(this.getSeconds())
    
    return `${min}:${sec}`;
  }
}
