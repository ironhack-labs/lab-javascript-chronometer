class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId =  1000;

  }
  startClick(callback) {
    setInterval(() => {
      callback
      this.currentTime++
    }, this.intervalId);


  }

  getMinutes() {
  return Math.floor(this.currentTime/60)
  }
  
  getSeconds() {
  return this.currentTime - (this.getMinutes()*60)
  }

  twoDigitsNumber(number) {
    number = String(number);
    if (number.length === 0) {
      return `00`; 
    }
    else if (number.length === 1) {
      return `0${number}`;
    }
    else if (number.length === 2) {
      return number;
    }
  }
  
  stopClick() {
  clearInterval(this.intervalId);
  }


  resetClick() {
  this.currentTime = 0;
  }

  splitClick() {
let min = this.twoDigitsNumber(this.getMinutes());
let sec = this.twoDigitsNumber(this.getSeconds());
return `${min}:${sec}`;
  }
}
