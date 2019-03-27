class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  };

  startClick() {
    var identifier = setInterval(() => {
      this.currentTime++;
      printSeconds();
      printMinutes();
    }, 1000);
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
      let seconds = this.currentTime % 60;
      return seconds;
    }
  }

  twoDigitsNumber(time) {
    if (time === 0) {
      return '00';
    } else if (time < 10) {
      return '0' + time;
    } else {
      return String(time);
    }
    //return ('0' + i).slice(-2); Another way to do in one line
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;

  }
  splitClick() {
    return this.getMinutes() + ':' + this.getSeconds();

  }
}

const c = new Chronometer();
c.startClick();