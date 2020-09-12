class Chronometer  {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  
startClick(callback) {
  setInterval(() => {
      this.currentTime += 1
    }, 1000);
  }

  getMinutes() {
  return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime%60
  }

  twoDigitsNumber(number) {
   if (number<10) return "0" + number;
   else return number
  }

  stopClick() {
    clearInterval(this.currentTime)
  }

  resetClick() {
 this.currentTime = 0
  }

  splitClick() {
   return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds())
  }
}
