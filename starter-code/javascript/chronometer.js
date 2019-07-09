class Chronometer {
  constructor() {
    (this.currentTime = 0), (this.intervalId = 0);
  }

  startClick() {
    const increase = () => {
      this.currentTime += 1;
      printTime();
    };

    this.intervalId = setInterval(increase, 100);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(number) {
    if (number.toString().length == 1) {
      return `0${number}`;
    } else {
      return `${number}`;
    }
  }

  resetClick() {
    this.currentTime = 0;
    minDec.innerHTML = "0";
    minUni.innerHTML = "0";
    secDec.innerHTML = "0";
    secUni.innerHTML = "0";
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
}

// splitClick() {}
