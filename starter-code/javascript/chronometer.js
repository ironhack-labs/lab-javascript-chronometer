class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  };

  startClick() {
    var identifier = setInterval(() => this.currentTime++, 1000);
    this.intervalId = identifier;
  }

  getMinutes() {
    // if(!this.currentTime) 
    if (this.currentTime === 0) {
      return 0;
    } else {
      let minutes = Math.trunc(this.currentTime / 60)
      return minutes;
    }
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return this.currentTime % 60;
    }
  }
  // twoDigitsNumber() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}

const c = new Chronometer();
c.startClick();