class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      console.log("add");
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  twoDigitsNumber(num) {
    return num.toString().length < 2 ? "0"+num : num.toString()
  }
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}
