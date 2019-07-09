class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
   
  }
  startClick() {

    setInterval(() => {
      this.currentTime+=1
      
  }, 1000)

  }
  getMinutes() {
    return parseInt(this.currentTime / 60)
  }
  
  getSeconds() {
    return this.currentTime % 60
  }
  twoDigitsNumber(value) {
   
    let textDigits = value.toString(10)

    if (textDigits.length<2) {
    return `0${textDigits}`
    } else {
    return textDigits
    }
  }
  stopClick() {
    let clearId = clearInterval(this.intervalId)
  }
  resetClick() {
    let clearcurrentTime = clearInterval(this.currentTime)
  }
}

