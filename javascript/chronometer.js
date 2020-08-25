class Chronometer {
  constructor() {

    this.currentTime = 0
    this.intervalId = 0


  }

  startClick() {

    setInterval(() => this.currentTime++, 1000)
    console.log('start')

  }
  getMinutes() {
    if (this.currentTime === 0) {
      return 0
    }

    if (this.currentTime % 60 === 0) {

      return this.currentTime / 60
    } else {
      return Math.floor(this.currentTime / 60)
    }


  }
  getSeconds() {

    if (this.currentTime === 0) {
      return 0
    }

    return this.currentTime - (Math.floor(this.currentTime / 60) * 60)

  }
  twoDigitsNumber(value) {
    const valueString = value.toString()
    if (valueString.length === 1) {
      return '0' + valueString
    }
    return valueString
  }
  stopClick() {

    clearInterval()
    console.log('stop')


  }
  resetClick() {

    this.currentTime = 0
    console.log('reset')

  }
  splitClick(min, sec) {

    console.log('split')

    if (min === undefined) {
      min = '00'
    }
    if (sec === undefined) {
      sec = '00'
    }

    return min + ':' + sec

  }
}
