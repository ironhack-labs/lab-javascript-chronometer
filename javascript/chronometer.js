class Chronometer {
  constructor() {

    this.currentTime = 0
    this.intervalId = 0

  }


  startClick(callback) {
    // ... your code goes here

    this.intervalId = setInterval(() => {
      this.currentTime++

    }, 1000)

  }


  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)

  }


  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60)

  }



  twoDigitsNumber() {
    // ... your code goes here
    return (this.getMinutes()).toString() + (this.getSeconds()).toString();
  }



  stopClick() {
    // ... your code goes here
    clearInterval(this.timeoutId)
  }


  resetClick() {
    // ... your code goes here
    this.currentTime = 0

  }
  splitClick() {
    // ... your code goes here
    let minutes = getMinutes() this.getMinutes())
  let seconds = getMinutes() this.getSeconds())
let split = `${minutes}:${seconds}`
return split


}
}