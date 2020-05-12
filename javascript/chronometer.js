class Chronometer {
  constructor() {
    this.currentTime = 21560;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      callback();
    }, 10);
  }

  getMinutes() {
    let theMinutes = Math.floor(this.currentTime / 6000);
    return theMinutes;
  }

  getSeconds() {
    let theSeconds = Math.floor((this.currentTime - (this.getMinutes() * 6000)) / 100);
    return theSeconds;
  }

  getMilliseconds(){
    let theMiliseconds = Math.floor( (this.currentTime - ((this.getMinutes() * 6000) + (this.getSeconds()*100))));
    return theMiliseconds;
  }

  twoDigitsNumber(parameter) {
    if (parameter < 10) {
      return String(parameter = `0${parameter}`);
    } else{
      return String(parameter);
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    if (min < 10 && sec < 10) {
      return`${0}${min}:${0}${sec}`;
    } else if (min < 10 && sec >= 10) {
      return `${0}${min}:${sec}`;
    } else if (min >= 10 && sec >= 10) {
      return `${min}:${sec}`;
    } else{
      return `${min}:${sec}`;
    }
  }
}