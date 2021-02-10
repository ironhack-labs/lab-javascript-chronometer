class Chronometer {
  constructor() {
    this.currentTime = 0; 
    this.intervalId = 0;

    this.milCurTime = 0;
    this.milIntervalId = 0;
  }

  startClick(callback1, callback2) {

    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if(callback1) {
        callback1();
      }
    }, 1000);

    this.milIntervalId = setInterval(() => {
      this.milCurTime += 1;
      if(callback2) {
        callback2();
      }
      if(this.milCurTime > 99) {
        this.milCurTime = 0;
      }
      // console.log(this.milCurTime);
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(number) {
    return number.toString().length < 2 ? `0` + number.toString() : number.toString();
  }

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.milIntervalId);
  }

  resetClick() {
    this.currentTime = 0;
    this.milCurTime = 0;
    console.log(this.milCurTime);
  }

  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    let mil = this.twoDigitsNumber(this.milCurTime);
    return `${min}:${sec}:${mil}`;
  }
}