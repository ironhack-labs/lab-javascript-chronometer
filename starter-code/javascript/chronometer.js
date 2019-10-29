class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
    this.intervalId = setInterval(() => { 
      this.currentTime++;
    }, 1000);
  }
  
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  // getSeconds() {}
  // twoDigitsNumber() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}

const newChrono = new Chronometer;

newChrono.currentTime = 50210;

console.log(newChrono.getMinutes());