class Chronometer {
  constructor() {

  this.currentTime = 0
  this.intervalId = 0
  
  }
  startClick(callback) {
   setInterval(() => {
     this.currentTime ++
   }, 1000);

  }
  getMinutes() {
    const minutes = this.currentTime / 60
    return Math.floor(minutes)
  }
  getSeconds() {
    const seconds = this.currentTime - this.getMinutes(this.currentTime) * 60
    return Math.floor(seconds)

  }
  twoDigitsNumber() {
   let min = this.getMinutes(this.currentTime).toString(2)
   let sec = this.getSeconds(this.currentTime).toString(2)

   return min + sec

  }
  stopClick() {
   
  clearInterval(this.currentTime)
  }

  resetClick() {
  this.currentTime = 0;
  }

  splitClick() {
  
    return `${this.twoDigitsNumber(this.min)}:${this.twoDigitsNumber(this.sec)}`
  

  }
}
