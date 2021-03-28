

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.startTime = 0;
  }
  startClick(callback) {
    this.startTime = new Date().getTime()
    this.intervalId = setInterval(() => {
      this.currentTime = (new Date().getTime()) - this.startTime;
      console.log({'currentime':this.currentTime})
    }, 1);
  }

  getMilliseconds() {

    return parseInt(this.currentTime / 10);
  }

  getMinutes() {
    return parseInt((this.currentTime / 1000) / 60);
    
  }
  getSeconds() {
    return parseInt((this.currentTime / 1000));
  }
  twoDigitsNumber(num) {
    console.log('^&^&^& :' + num)
    this.num = num;
    if (num === 0) {
      num = `00`
    } else if (num < 10) {
      num = `0${num}`
    } else if (num > 99) {
      let numString = `${num}`;
      console.log('munstring :' + typeof numString + numString)
      num = numString[numString.length - 2] + numString[numString.length - 1];
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

