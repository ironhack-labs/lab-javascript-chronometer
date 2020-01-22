class Chronometer {


  constructor() {
    this.currentTime = 0
    this.intervalId = 0
    this.minutes = 0
    this.seconds = 0

  }
  startClick() {

    this.intervalId = setInterval(() => {

      this.currentTime++
    }, 1000)

  }


  getMinutes() {


    this.minutes = Math.floor(this.currentTime / 60)

    return this.minutes
  }


  getSeconds() {

    this.seconds = this.currentTime - this.getMinutes() * 60

    return this.seconds

  }
  twoDigitsNumber(num) {


    if (num > 9) {

      return num.toString()


    } else {
      return `0${num}`


    }
  }


  stopClick() {

    clearInterval(this.intervalId)

  }
  resetClick() {

    this.currentTime = 0

  }
  // splitClick() {}
}