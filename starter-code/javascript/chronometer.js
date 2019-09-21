class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  addOne = () => {
    printTime()
    return this.currentTime += 1
  }

  startClick = () => {
    this.intervalId = setInterval(this.addOne, 1000)
    return this.intervalId
  }

  getMinutes = () => {
    return Math.floor(this.currentTime/60)
  }

  getSeconds = () => {
    return this.currentTime % 60
  }
  
  twoDigitsNumber = (value) => {
    const valueString = value.toString()
    return valueString.length === 1? "0" + valueString: valueString
  }

  stopClick = () => {
   clearInterval(this.intervalId) 
  }

  resetClick = () => {
    this.currentTime = 0
  }
  splitClick = () => {
    return this.currentTime
  }
}
