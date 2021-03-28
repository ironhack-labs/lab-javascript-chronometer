

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1);
  }

  getMilliseconds() {
    let num = parseInt(this.currentTime);

    if (this.currentTime > 99) {
      num = parseInt(num.toString().slice(-2));
    } 
    return parseInt(num);
  }

  getMinutes() {
    return parseInt((this.currentTime / 1000) / 60);
    
  }
  getSeconds() {
    return parseInt((this.currentTime / 1000) % 60)
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
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilliseconds())}`
  }
}

