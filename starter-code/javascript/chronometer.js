class Chronometer {
  
  constructor() {
    this.currentTime = 59
    this.intervalId = 0
  }
  
  startClick() {
    this.intervalId = setInterval(() => {this.currentTime++}, 1000)
    console.log(`Chronometer with ID ${this.intervalId} started`)

  }
  
  getMinutes() {
    return Math.floor(this.currentTime / 60)

  }
  
  getSeconds() {
    return this.currentTime - (this.getMinutes(this.currentTime)* 60)

  }
  
  twoDigitsNumber(number) {
    let str = String(number)
    return (str.length < 2) ? '0' + str : str

  }
 
  stopClick() {
    clearInterval(this.intervalId)
    console.log(`Chronometer with ID ${this.intervalId} stopped`)
  }
  
  resetClick() {
    this.currentTime = 0
    console.log ('Chronometer was reseted')
  }
  
  splitClick() {
    printSplit()

  }
}