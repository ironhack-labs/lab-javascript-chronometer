
class Chronometer {

  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime++, 1000)
    console.log('HOLA')
  }
  getMinutes() {
    let contadorMinutos = 0;
    
    if (this.currentTime === 0) {
      return 0;
    } else {
      contadorMinutos = Math.floor(this.currentTime / 60)
    }
    this.currentTime = contadorMinutos
    return this.currentTime
  }
  getSeconds() {
    let contadorSegundos = 0;
    if (this.currentTime === 0) {
      return 0;
    } else {
      contadorSegundos = this.currentTime % 60
      this.currentTime = contadorSegundos
      return this.currentTime
    }
  }
  twoDigitsNumber() {
    
    if (this.currentTime < 10) {
      let newString = `0${this.currentTime}`
      return newString
    } else {
      let newString = this.currentTime.toString()
      return newString
    }
    

  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
   
    /*
    console.log(minutes)
    console.log(seconds)
    let finalMinutes = minutes.twoDigitsNumber()
    let finalSeconds = seconds.twoDigitsNumber()

    let time = `${finalMinutes}:${finalSeconds}`
    return time
  }*/
    let min = this.getMinutes()
    let sec = this.getSeconds()
    if (min < 10 && sec < 10) {
        return `${0}${min}:${0}${sec}`
      } else if (min < 10 && sec > 10) {
        return `0${min}:${sec}`
      } else if (min > 10 && sec < 10) {
        return`${min}:0${sec}`
      } else {
        return `${min}:${sec}`
      }
  }
    /*
    let min = this.getMinutes()
    let sec = this.getSeconds()
    console.log(min)
    let finalMinutes = min.twoDigitsNumber()
    let finalSeconds = sec.twoDigitsNumber()
    console.log(finalSeconds)
        if (min < 10 && sec < 10) {
            return `${finalMinutes}:${finalSeconds}`
          } else if (min < 10 && sec > 10) {
            return `0${finalMinutes}:${sec}`
          } else if (min > 10 && sec < 10) {
            return`${min}:0${finalSeconds}`
          } else {
            return `${min}:${sec}`
          }
        }*/
}