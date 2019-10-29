class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick(cb) {
    this.intervalId = setInterval(() => { 
      this.currentTime++;
      cb();
    }, 50);
  }
  
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return Math.floor(this.currentTime%60);
  }
  twoDigitsNumber(num) {
    if(num < 10){
      return `0${num}`;
    }
    return `${num}`;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}

const newChrono = new Chronometer;

newChrono.currentTime = 50210;

console.log(newChrono.getMinutes());