//LOGIC//

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
    this.currentTime ++;
    }, 1000);
  }

  getMinutes() {
    let minuteCounter = Math.floor(this.currentTime / 60);
    return minuteCounter;
  }
 
  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60);
    return seconds;
    /*let minutes = this.getMinutes ();
    let seconds = minutes * 60;
    return this.currentTime - seconds;*/
  }

  twoDigitsNumber(number) {
    if(number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  }

  stopClick() {
  clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
    //doesn't stop counting//
  }
  splitClick() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let result = this.twoDigitsNumber(minutes) + ':' + this.twoDigitsNumber(seconds);
    return result;

    /*`${twoDigitsNumber(getMinutes())}:${twoDigitsNumber(getSeconds())}`*/
  }
  }