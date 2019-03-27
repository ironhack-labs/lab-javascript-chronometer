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
    if (this.currentTime === 0) {
      return 0;
    } else {
      return Math.trunc(this.currentTime / 60);
    }
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      console.log(this.courrentTime - (this.currentTime % 60));
    }
  }
  // twoDigitsNumber() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}

const c = new Chronometer();
c.startClick();