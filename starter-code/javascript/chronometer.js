class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentMiliseconds
  }

  startClick = () => {
    this.intervalId = setInterval(() => this.currentTime++, 10);
    // this.intervalId = setInterval(() => this.currentTime++, 1000);
  };

  getMinutes = () => {
    // return Math.floor(this.currentTime / 60);
    return Math.floor((this.currentTime / 100) / 60);
  };

  getSeconds = () => {
    // return this.currentTime % 60;

    return Math.floor(this.currentTime / 100) % 60;
  };

  getMilliseconds = () => {
    return this.currentTime % 100;
  };

  twoDigitsNumber = num => {
    let str = num.toString();
    if (str.length === 1) {
      str = "0" + str;
    }

    return str;
  };

  stopClick = () => {
    clearInterval(this.intervalId);
  };
  resetClick = () => {
    this.currentTime = 0;
  };
  splitClick() {
    let milliseconds = chronometer.twoDigitsNumber(
      chronometer.getMilliseconds()
    );
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());

    return `${minutes}:${seconds}:${milliseconds}`;
    // return `${minutes}:${seconds}`;
  }
}
