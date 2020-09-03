class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    console.log("start chrono");
    this.intervalId = setInterval(
      () => ((this.currentTime += 1), callback()),
      1000
    );
  }
  getMinutes() {
    var minutes = Math.floor(this.currentTime / 60);
    console.log(minutes);
    return minutes;
  }
  getSeconds() {
    var minutes = Math.floor(this.currentTime / 60);
    var remainingSeconds = this.currentTime - minutes * 60;
    console.log(remainingSeconds);
    return remainingSeconds;
  }
  twoDigitsNumber = (number) => (number < 10 ? "0" + number : `${number}`);

  stopClick() {
    console.log("stop chrono");
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    var min = this.getMinutes();
    var sec = this.getSeconds();

    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }

    return `${min}:${sec}`;
  }
}
