
//let seconds = 0
//let minutes = 0

class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    // ... your code goes here
  }


  startClick(callback) {
    this.intervalId = setInterval(() => {

      this.currentTime++;

      console.log(this.currentTime)

    }, 1000);
  }



  // ... your code goes he
  getMinutes() {

    let minutes = Math.floor(this.currentTime / 60)
    return minutes
    // ... your code goes here
  }
  getSeconds() {

    let seconds = Math.floor(this.currentTime % 60)

    return seconds
    // ... your code goes here
  }

  twoDigitsNumber(number) {
    if (number < 10) {
      return `0${number}`
    } else return `${number}`
  }

  stopClick() {

    clearInterval(this.intervalId)
    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0
    // ... your code goes here
  }
  splitClick() {
    let min = chronometer.getMinutes();
    let sec = chronometer.getSeconds();

    if (min < 10) {
      return (`${0}${min}:${0}${sec}`)
    }
    else {
      return (`${min}:${sec}`)
    }

    // ... your code goes here
  }
}