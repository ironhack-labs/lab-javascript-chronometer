class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId= 0;
  }

  startClick(){
    this.intervalId= setInterval(() => {
      this.currentTime++;
      this.setTime();
    },1000)
  }
  setMinutes() {
    return parseInt(this.currentTime/60)
  }
  setSeconds() {
    return parseInt(this.currentTime%60)
  }
  twoDigitsNumber(number) {
    if (number<10) return `0${number}`
    return `${number}`
  }
  setTime() {
    var minutes = this.twoDigitsNumber(this.setMinutes())
    var seconds = this.twoDigitsNumber(this.setSeconds())
    var counter = this.intervalId
  }
  setMilliseconds() {}
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {}
}