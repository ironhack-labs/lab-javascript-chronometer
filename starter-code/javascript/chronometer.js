class Chronometer {
  constructor() {
   this.currentTime = 0
  }
  startClick() {
    const countMe = ()=> {
      console.log(this.currentTime)
      this.currentTime++
      //printTime()
    }
    this.intervalId = setInterval(countMe, 1000)
  }
  getMinutes() {
    const minutes = this.currentTime / 60
    return Math.floor(minutes) 
  }
  getSeconds() {
    const minutes = this.currentTime % 60
    const minutesAndSeconds = minutes.toFixed(2) 
    if(this.currentTime > 60){

      return parseInt(minutesAndSeconds)
    }
      return this.currentTime

  }

  twoDigitsNumber(time) {
    let timeString = time.toString()
    if (timeString.length < 2) {
      return `0${timeString}`
      
    }
    return time.toString()
  }

  resetClick() {
    this.currentTime = 0
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  // startClick() {}
  // getMinutes() {}
  // getSeconds() {}
  // twoDigitsNumber() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}
