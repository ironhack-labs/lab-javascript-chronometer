class Chronometer {
  constructor() {
    this.currentTime =0 ,
    this.intervalId =0
  }
  startClick() {
    this.intervalId=setInterval(()=>{
      this.currentTime++
    },10)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 6000)
  }
  getSeconds() {
    return Math.floor((this.currentTime/100)) % 60
  }
  getMilis() {
    return this.currentTime % 100 
  }
  twoDigitsNumber(x) {
    return x.toString().padStart(2,'0')
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ':' + this.twoDigitsNumber(this.getSeconds()) + '.' + this.twoDigitsNumber(this.getMilis()) 
  }
}