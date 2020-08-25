class Chronometer {

  intervalId = 0
  currentTime = 0

  constructor() {
    // ... your code goes here

  }
  startClick(callback) {
    // ... your code goes here
    setInterval(() => {
      this.currentTime++
      printTime()
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    let min = this.currentTime / 60

    min = Math.floor(min)

    return min
  }
  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60
    return  seconds

  }
  twoDigitsNumber(getMinutes, getSeconds) {
    // ... your code goes here
    const zero = "0"
    let finalTime = ""

    if (this.currentTime < 10)
      finalTime = zero.concat(this.currentTime.toString())
  
    return finalTime
  }   
  stopClick() {
    // ... your code goes here
    clearInterval(setInterval)

  }

  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }
  splitClick(min, sec) {
    // ... your code goes here
    if (min === undefined)
      min = 0
    if (sec === undefined)
      sec = 0
    const split = `${0}${min}:${0}${sec}`
    console.log(min)
    return split
  }
}
