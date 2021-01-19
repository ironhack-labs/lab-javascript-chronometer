class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      this.startClick
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    const min = Math.floor(this.currentTime / 60)
    return min
  }
  
  getSeconds() {
    // ... your code goes here
    const sec = this.currentTime % 60
    return sec
  }
  twoDigitsNumber(par) {
    // ... your code goes here
    if (par >= 10){
      return par.toString()
    } else {
      return "0" + par
    }
  }

  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }

  splitClick() {
    // ... your code goes here
    let min = this.getMinutes()
    let sec = this.getSeconds()
    return this.twoDigitsNumber(min) + ":" + this.twoDigitsNumber(sec)
  }
}
