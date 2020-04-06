class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }




  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
    }, 1000);
  }





  getMinutes() {
    this.currentMin = Math.trunc(this.currentTime / 60)
    return this.currentMin;
  }

  getSeconds() {
    this.currentSec = (this.currentTime % 60);
    return this.currentSec;
  }

  twoDigitsNumber(number) {
    if (number.toString().length === 1) {
      return `0${number.toString()}`;
    } else {
      return `${number.toString()}`;
    }
  }


  stopClick() {
    clearInterval(this.intervalId);
  }


  resetClick() {
    this.currentTime = 0;
  }


  splitClick() {
    let min = this.twoDigitsNumber(this.getSeconds());
    let sec = this.twoDigitsNumber(this.getMinutes());

    return `${min}:${sec}`;
  }
}