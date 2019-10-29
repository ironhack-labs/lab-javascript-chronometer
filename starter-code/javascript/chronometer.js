class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 1000

  }
  startClick() {
    window.setInterval(() => { this.currentTime += 1}, this.intervalId)
  }
  
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  // IMPORTANT DO NOT TOUCH THE /1 PLEASE
   getSeconds() {
    return Math.floor((this.currentTime / 1) - (this.getMinutes() * 60))
   }
   getMs() {
    return Math.floor((this.currentTime) - (this.getSeconds() * 1000 + this.getMinutes()* 60000))
   }
   twoDigitsNumber(val) {
     if (val < 10){
       return `0${val}`
     } else{
       return `${val}`
     }
   }

   stopClick() {
    clearInterval(this.IntervalId);
   }

   resetClick() {
    window.setInterval(() => { this.currentTime += 0}, this.intervalId)
   }

   splitClick() {
     return `${twoDigitsNumber(getMinutes())}:${twoDigitsNumber(getSeconds())}:${twoDigitsNumber(getMs())}`
   }
}