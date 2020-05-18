class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.milliseconds = 0
    this.intervalMilliseconds = 0
  }

  startClick (callback) {
    this.intervalId = setInterval(()=>{
      this.currentTime += 1
      if (callback) {
        callback()
      }
    }, 1000)
    
    this.intervalMilliseconds = setInterval(()=>{
      this.milliseconds += 1
      if (callback) {
        callback()
      }
    }, 10)
  }

  getMinutes () {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds () {
    return this.currentTime % 60
  }

  getMilliseconds () {
    return this.milliseconds
  }

  twoDigitsNumber (num) {
    const numString = num.toString()
    if(numString.length === 2){
      return numString
    } else if (numString.length === 1) {
      return "0" + numString
    } else if (numString.length > 2) {
      return numString.slice(-2)
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.intervalMilliseconds)
  }

  resetClick() {
    this.currentTime = 0
    this.milliseconds = 0
  }

  splitClick() {
    const validMinutes = this.twoDigitsNumber(this.getMinutes())
    const validSecond = this.twoDigitsNumber(this.getSeconds())
    const validMilliseconds = this.twoDigitsNumber(this.getMilliseconds())
    
   console.log(`${validMinutes}:${validSecond}:${validMilliseconds}`)
    return `${validMinutes}:${validSecond}:${validMilliseconds}`
  }
}
