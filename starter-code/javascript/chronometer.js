class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick() {
    setInterval(() => {
      this.currentTime++
    }, 1000);
  }

  getMinutes() {

    if (!this.currentTime) {
      return 0
    }

    let minutes = Math.floor(this.currentTime / 60)

    console.log
    return minutes
  }

  getSeconds() {

    if (!this.currentTime) {
      return 0
    }
    
    // let milliSec = this.currentTime % 1000
    let seconds = Math.floor(this.currentTime)
    
    if (seconds > 60) {
      return this.currentTime % 60
    } else {
      return seconds 
    }


  
    
    console.log (seconds)
  }

  twoDigitsNumber(number) {

      let stringNumber = number.toString()

      if (number == 0) {
        return "00"

      } else if (number >= 10) {
        return stringNumber
      } else {
        return "0" + stringNumber
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
 console.log("check")

