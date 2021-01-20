class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = 0
  }
  startClick(callback){
    this.intervalId = setInterval(()=>{
      this.currentTime++
      callback()
    },1000)
  }

  getMinutes() {
    let minutos = this.currentTime/60
    return Math.floor(minutos)
  }
  getSeconds() {
    let sec = this.currentTime%60
    console.log(sec)
    return Math.floor(sec)
  }
  twoDigitsNumber(number) {
    let numberString = number.toString()
    if (numberString.length < 2) {
      numberString = "0" + numberString
    }
    return numberString
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();

    if (min < 10 && sec < 10) {
      return `${0}${min}:${0}${sec}`
    } else if (min < 10 && sec > 10) {
      return `0${min}:${sec}`
    } else if (min > 10 && sec < 10) {
      return `${min}:0${sec}`
    } else {
      return `${min}:${sec}`
    }
  }
}

