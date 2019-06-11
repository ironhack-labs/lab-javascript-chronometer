class Chronometer {
  constructor() {
    this.currentTime = 0;

  }
  startClick() {
      this.intervalId = setInterval(() => {
      this.currentTime += 1
// console.log(this.currentTime)
    }, 1000)
  }

  getMinutes() {
    return parseInt(this.currentTime/60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(time) {
    let i = String(time)
    if (i.length === 1) {
      return "0" + i;
    }
     return i;
  }

  stopClick() {
    clearInterval(this.intervalId)
  };

  resetClick() {
this.currentTime = 0;
    
  }
  // splitClick() {}
}