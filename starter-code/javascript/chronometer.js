class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
   this.intervalId = setInterval(() => {
    this.currentTime++
  }, 1000)}

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60)
    
    return minutes
  }

  getSeconds() {
      return this.currentTime%60
  }

  twoDigitsNumber(num) {
    if(num <10){
      return '0' + num
    } else{
      return String(num)
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let splitTime = `${this.getMinutes} : ${this.getMinutes}`
  }
}
