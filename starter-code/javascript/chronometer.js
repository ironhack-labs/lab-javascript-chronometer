class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }
  startClick() {
    this.intervalId = setInterval(()=>{
      this.currentTime ++;
    },10)
  }
  getMinutes() {
    return Math.floor(this.currentTime/6000)
  }
  getSeconds() {
    return Math.floor(this.currentTime/100 - this.getMinutes() * 6000)
  }
  twoDigitsNumber(number) {
    return number<10 ? '0'+number : number.toString()
  }
  stopClick() {
    clearInterval(this.intervalId)
    this.intervalId = null
  }
  resetClick() {
    this.currentTime = 0
  }
  getMiliseconds(){
    return this.currentTime - this.getSeconds() * 100
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ":" 
    + this.twoDigitsNumber(this.getSeconds()) + ":"
    + this.twoDigitsNumber(this.getMiliseconds())
  }
}