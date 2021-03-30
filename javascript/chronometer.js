class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1
    }, 1000)

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
      return this.currentTime - this.getMinutes() * 60

    }
  }

  twoDigitsNumber(value) {
    // ... your code goes here
    if (value.toString().length === 1) {
      let valueTest = '0' + value
      return valueTest
    } else {
      return value.toString()
    }
  }

  stopClick() {
    // ... your code goes here

    window.clearInterval(this.intervalId)


  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
    let min = this.getMinutes();
    let sec = this.getSeconds();
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`

    // let formatTime
    // if (min < 10 && sec < 10) {
    //   formatTime = `${0}${min}:${0}${sec}`
    //   console.log(formatTime);
    //   return formatTime

    // } else if (min < 10 && sec > 10) {
    //   formatTime = `0${min}:${sec}`
    //   console.log(formatTime);
    //   return formatTime

    // } else if (min > 10 && sec < 10) {
    //   formatTime = `${min}:0${sec}`
    //   console.log(formatTime);
    //   return formatTime

    // } else {
    //   formatTime = `${min}:${sec}`
    //   console.log(formatTime);
    //   return formatTime
    // }
  }
}
