function Chronometer() {
  this.currentTime = 0
  this.intervalId = 0

  this.startClick = function () {
    this.intervalId = setInterval(() => {
      return this.currentTime++
      console.log(this.currentTime)
    }, 1000)

  }

  this.getMinutes = function () {
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }
  this.getSeconds = function () {
    let seconds = this.currentTime % 60
    return seconds
  }

  this.twoDigitsNumber = function (number) {
    if (number < 10) {
      let string = `0${ number }`
      return string
    } else {
      return number.toString()
    }

  }

  this.stopClick = function (number) {

    clearInterval(this.intervalId)
  }


  this.resetClick = function (number) {
    this.currentTime = 0
  }

  this.splitClick = function (number) {

  }

}