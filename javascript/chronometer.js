

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      console.log(this.currentTime);
    }, 1000);
    
  }
  getMinutes() {
    return parseInt(this.currentTime / 60);
    
  }
  getSeconds() {
    return parseInt(this.currentTime % 60)
  }
  twoDigitsNumber(num) {
    this.num = num;
    if (num === 0) {
      num = `00`
    } else if (num < 10) {
      num = `0${num}`
    } else {
      num = `${num}`
    }
    return num;
  }
  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}

