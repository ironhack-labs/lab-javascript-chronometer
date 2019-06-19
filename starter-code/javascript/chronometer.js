class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000)
  }

  getMinutes() {
    return this.currentTime < 60 ? 0 : Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMiliseconds() {
    var miliseconds = 0;
    return setInterval(() => {
      if (miliseconds < 100) {
        miliseconds += 1;
      } else {
        miliseconds = 0;
      }
    }, 1)
  }

  twoDigitsNumber(n) {
    return n < 10 ? '0' + n : String(n)
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }


}

const chronn = new Chronometer();


chronn.startClick();
chronn.getMinutes();
chronn.getSeconds();
chronn.twoDigitsNumber();
