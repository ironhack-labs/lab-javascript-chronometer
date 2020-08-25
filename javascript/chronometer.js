class Chronometer {

  constructor() {

    // ... your code goes here

    this.currentTime = 0
    this.intervalId = 0

  }
  startClick(callback) {

    // ... your code goes here

    this.intevalId = setInterval(() => {

      this.currentTime++

    }, 1000)

  }
  getMinutes() {

    // ... your code goes here

    let minutes = 0

    minutes = this.currentTime / 60

    return Math.floor(minutes)

  }
  getSeconds() {

    // ... your code goes here
    
    let seconds = 0

    seconds = this.currentTime % 60

    return Math.floor(seconds)

  }
  twoDigitsNumber(value) {

    // ... your code goes here

    if (value < 10) {

      return '0' + value.toString()

    } else {
 
      return value.toString()

    }
    

  }
  stopClick() {

    // ... your code goes here

    clearInterval(this.intevalId)

  }
  resetClick() {

    // ... your code goes here

    this.currentTime = 0

  }
  splitClick() {

    // ... your code goes here

    let splitMinutes = this.twoDigitsNumber(this.getMinutes())
    let splitSeconds = this.twoDigitsNumber(this.getSeconds())

    return `${splitMinutes}:${splitSeconds}`

  }
}
