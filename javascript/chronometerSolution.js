class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervaliID = 0;
  }
  startClick(callback) {
    // ... your code goes here
    setInterval(() => {
      this.currentTime++;
      callback()
    }, 1000);
  }
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60);
  }
  twoDigitsNumber(val) {
    // ... your code goes here
    return ('0' + val).slice(-2);
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervaliID);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    // let min = chronometer.getMinutes();
    // let sec = chronometer.getSeconds();
    // if (min < 10) {
    //   expect(chronometer.splitClick()).toEqual(`${0}${min}:${0}${sec}`);
    // } else {
    //   expect(chronometer.splitClick()).toEqual(`${min}:${sec}`);
    // }
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}