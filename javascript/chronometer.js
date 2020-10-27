class Chronometer {


  constructor() {
    this.currentTime = 0
    this.intervalId = 0

  }
  startClick(callback) {

    setInterval(() => {
      this.currentTime++
    }
      , 1000);

  }
  getMinutes() {

    if (this.currentTime === 0) {
      return 0
    }
    else {
      return (this.currentTime = Math.floor(this.currentTime / 60))

    }

  }

  getSeconds() {

    if (this.currentTime === 0) {
      return 0
    }
    else {
      return (this.currentTime = Math.floor(this.currentTime % 60))

    }

  }
  twoDigitsNumber(num) {

    if (num) {
      num = num.toString()
      }
    else {
      num = "0"
    }

    if (num.length === 1) {
      return (num = `0${num}`)
    }
    else {
      return num
    }

  }
  stopClick() {

    clearInterval(0)

  }

  resetClick() {

    this.currentTime = 0

  }
  splitClick(min, sec) {
    
     min = this.twoDigitsNumber(min);
     sec = this.twoDigitsNumber(sec);

    return `${min}:${sec}`

    }


}
