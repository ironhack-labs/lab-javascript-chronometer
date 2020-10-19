class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {this.currentTime++}, 1000);
  }  
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }
  
  twoDigitsNumber() {
    let minDec;
    let minUni;
    let splitMin = this.getMinutes().toString().split("");
      if (this.getMinutes() < 10) {
        minUni = splitMin[0]
        minDec = "0"
        }
      if (this.getMinutes() >= 10) {
        minUni = splitMin[1]
        minDec = splitMin[0]
        }

    let secDec;
    let secUni;
    let splitSec = this.getSeconds().toString().split("");
      if (this.getSeconds() < 10) {
        secUni = splitSec[0]
        secDec = "0"
      }
      if (this.getSeconds() >= 10 ) {
        secUni = splitSec[1];
        secDec = splitSec[0]
        
      } 

    return `${minDec}${minUni}:${secDec}${secUni}`
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    return this.twoDigitsNumber() 
  }
}
