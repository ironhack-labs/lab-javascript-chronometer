class Chronometer {
  constructor(){
    this.currentTime = 0;
    this.intervalId = 0;
  }
  
  startClick(callback) {
      this.intervalId =  setInterval(() => {
      this.currentTime++;
    },1000)
  }

  getMinutes(callback) {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }
  twoDigitsNumber() {
    return '0' + this.currentTime.toString().slice(-2)
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    this.seconds = this.twoDigitsNumber(this.getSeconds());
    this.minutes = this.twoDigitsNumber(this.getMinutes());
    return this.minutes + ":" + this.seconds;
  }
}