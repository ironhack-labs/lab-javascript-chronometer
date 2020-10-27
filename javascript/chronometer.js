// const timeoutID = setInterval(() => console.log('está funcionando'), 1000)
// console.log(timeoutID)

class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {

    setInterval((callback) => {

      this.currentTime += 1

    }, 1000)
  }

  getMinutes() {

    if (!this.currentTime) {

      return 0

    }

    return parseInt(this.currentTime / 60)

  }
  getSeconds() {

    if (!this.currentTime) {

      return 0

    }

    return this.currentTime

  }

  twoDigitsNumber(number) {

    if (number < 10) {

      return '0' + number

    } else {

      return `${number}`

    }
  }

  stopClick() {

    clearInterval(this.intervalId)

  }
  resetClick() {

    this.currentTime = 0

  }
  splitClick() {
    let mins = this.getMinutes
    let seconds = this.getSeconds

    return `${this.twoDigitsNumber(mins)}:${this.twoDigitsNumber(seconds)}`

  }
}

