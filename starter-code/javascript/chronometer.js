class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    let self = this;
    this.intervalId = setInterval(function(){
      self.currentTime++},1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  
  getSeconds() {    
    let seconds = this.currentTime % 60;
    return seconds;
  }

  twoDigitsNumber(number) {
    let twoDigits = "";
    if (number < 10){
      twoDigits = "0" + number
      return twoDigits;
    }
    else {
    return number.toString()
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  
  resetClick() {
    this.currentTime = 0;
  }
  
  splitClick() {
    let splitSec = this.twoDigitsNumber(this.getSeconds())
    let splitMin = this.twoDigitsNumber(this.getMinutes())
    return splitMin + ":" + splitSec
  }
}

