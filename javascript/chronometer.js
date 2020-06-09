class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {


    // ... your code goes here

    this.intervalId = setInterval(() => this.currentTime++, 1000)
  }


  getMinutes() {
    // ... your code goes here

    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    // ... your code goes here

    if (this.currentTime === 0) {
      return 0
    } else {
      return this.currentTime % 60
    }

  }
  twoDigitsNumber(getMinutes) {
    // ... your code goes here

    return getMinutes > 9 ? `${getMinutes}` : `0${getMinutes}`;
  }


  stopClick() {
    // ... your code goes here

    //document.querySelector('button').onclick = () =>
    clearInterval(this.intervalId)


  }
  resetClick() {
    // ... your code goes here

    return this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here

    let seconds = getSeconds > 9 ? `${getSeconds}` : `0${getSeconds}`;


    return (`${twoDigitsNumber}:${seconds}`)
  }
}