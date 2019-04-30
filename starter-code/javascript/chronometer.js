class Chronometer {
  constructor() {
    this.currentTime = 0
    this.currentMillSeconds = 0
    this.intervalId
    this.millSecondsId
}

  startClick() {
    let timer = setInterval( () => {
      this.currentTime += 1
      printTime();
      console.log(this.currentTime)
    },1000)

    let millTimer = setInterval(() => {
      if(this.currentMillSeconds<100) {
      this.currentMillSeconds += 1
      printMilliseconds()
    } else {
      this.currentMillSeconds = 0
    }
    } ,10)

    this.intervalId = timer
    this.millSecondsId = millTimer
  }
  getMinutes() {
    let seconds = this.currentTime
    let minutes = parseInt(seconds/60)
    return minutes
  }

  getSeconds() {
    let seconds = this.currentTime
    let minutes = parseInt(seconds/60)
    let actualSeconds = this.currentTime - minutes*60

    return actualSeconds
  }

  getMillSeconds() {
    let mills = this.currentMillSeconds
    return mills

  }

  
  twoDigitsNumber(num) {
    if (num <10) {
      let string = num.toString()
      let result = "0" + string
      return result
    } else if (num >= 10){ 
      return num.toString()
    }
  }
  
  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.millSecondsId)
  }
  
  resetClick() { 
    this.currentTime = 0
    this.currentMillSeconds = 0
  }
  // splitClick() {}
}