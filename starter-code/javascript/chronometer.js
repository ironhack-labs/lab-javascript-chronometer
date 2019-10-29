class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick() {
    this.intervalId = setInterval(() => this.currentTime += 1, 1000)
  }
  getMinutes() {
    let min = +(this.currentTime/60)
    return(Math.floor(min))
  }
  getSeconds() {
    let sec = +(this.currentTime % 60)
    return ((Math.floor(sec)))
  }
  twoDigitsNumber(num) {
    let dig = ""
    if(num < 10){
      dig += "0"
      dig += num
    }else {
      dig += num
    }return (dig)
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
    resetClick() {
      this.currentTime = 0
    }
  // splitClick() {}
}