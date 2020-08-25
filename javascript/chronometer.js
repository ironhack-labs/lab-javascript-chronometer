class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  

  startClick(callback) {
    setInterval((elem) => {
        this.currentTime += 1
    }, 1000)
  }
  getMinutes() {
    if (!this.currentTime){
        return 0
    }
    const minutes = Math.round(this.currentTime / 60)
    return minutes
  }

getSeconds() {
    if (!this.currentTime){
        return 0
    }
    const secs = Math.round(this.currentTime % 60)
    return secs
}


twoDigitsNumber() {
    const formattedNumber = ("0" + this.currentTime).slice(-2);
    return (formattedNumber)
}

stopClick() {
    clearInterval(this.currentTime)
}

resetClick() {
    this.currentTime = 0
}

splitClick() {  
    const mins = this.getMinutes()
    const secs = this.getSeconds()
    return `0${mins}:0${secs}`
 }
}