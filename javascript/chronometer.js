class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback) {
    
    this.intervalId = setInterval(() => {
      
      console.log(this.currentTime);
    
      this.currentTime++;
    
      //if (this.currentTime === 3) {
      //  clearInterval(intervalId);
      //}
    }, 1000);
  }

  getMinutes() {
      return Math.floor(this.currentTime / 60)
  } 

  getSeconds() {
    return this.currentTime % 60
  }

  twoDigitsNumber(number) {
    if (number < 10) {
      return `0${number}`
    } else {
      return `${number}`
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {
    let minutes = this.getMinutes()
    let seconds = this.getSeconds()
    
    return this.twoDigitsNumber(minutes) + ":" + this.twoDigitsNumber(seconds)
   }}
