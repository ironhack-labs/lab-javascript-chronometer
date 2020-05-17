class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick (callback) {
    this.intervalId = setInterval(()=>{
      this.currentTime += 1
      if (callback) {
        callback()
      }
    }, 1000)    
  }

  getMinutes () {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds () {
    return this.currentTime % 60
  }

  twoDigitsNumber (num) {
    const numString = num.toString()
    if(numString.length === 2){
      return numString
    } else if (numString.length === 1) {
      return "0" + numString
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {
    const validMinutes = this.twoDigitsNumber(this.getMinutes())
    const validSecond = this.twoDigitsNumber(this.getSeconds())
    
    return `${validMinutes}:${validSecond}`
  }
}
