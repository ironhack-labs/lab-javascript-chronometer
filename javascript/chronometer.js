class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime += 1
    }, 1000)

  }
  // ... your code goes here

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
    // ... your code goes here
  }
  getSeconds() {
    let seconds = Math.floor((this.currentTime % 60))
    return seconds

    // ... your code goes here
  }
  twoDigitsNumber(number) {

    return (this.getMinutes()).toString() + (this.getSeconds()).toString()


    // ... your code goes here
  }
  stopClick() {

    clearInterval(this.intervalId);

  }
  resetClick() {

    this.currentTime = 0


    // ... your code goes here
  }
  splitClick(min, sec) {

    min = this.twoDigitsNumber(min)
    sec = this.twoDigitsNumber(sec)

    return `${min}:${sec}`



    // ... your code goes here

  }

}
