class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval( () => {
      this.currentTime ++;
      callback();
    }, 1000);
  }

  getMinutes() {
    let numberOfMinutes = Math.floor(this.currentTime/60);
    return numberOfMinutes;
  }

  getSeconds() {
    let numberOfSeconds = this.currentTime % 60;
    return numberOfSeconds;
  }

  twoDigitsNumber(n) {
    return n.toString().length === 1 ? "0" + n.toString() : n.toString();
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick(minutes, seconds) {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    
    if (min < 10 && sec < 10) { return `0${min}:0${sec}` }
    else if (min < 10 && sec > 10) { return `0${min}:${sec}` } 
    else if (min > 10 && sec < 10) { return `${min}:0${sec}` } 
    else { return `${min}:${sec}` };
  }
}
