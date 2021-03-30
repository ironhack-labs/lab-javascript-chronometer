class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    const intervalId = setInterval(()=>{this.currentTime++
    },1000)
  }
  getMinutes() {
  return (Math.floor(this.currentTime/60))
  }
  getSeconds() {
  return (this.currentTime % 60)

  }
  twoDigitsNumber(num) {
  if (num < 10){
    return (`0${num}`)
  }else {
    return (`${num}`)
  }
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime=0
  }
  splitClick() {
    let min= this.getMinutes()
    let sec= this.getSeconds()
      return (`${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`)
  }
}
