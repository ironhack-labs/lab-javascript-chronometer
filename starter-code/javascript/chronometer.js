class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
    this.mili = 0;
    this.miliIntervalId;
  }

  
  // startClick() {}
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);

    this.miliIntervalId = setInterval(() => {
      this.mili < 100 ? (this.mili += 1) : (this.mili = 0);
    }, 10);
  }


  // getMinutes() {}
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }


  // getSeconds() {}
  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds; 
  }


  // twoDigitsNumber() {}
  twoDigitsNumber(a) {

    if (a < 10) {
      var a = '0' + a;
    } else {
      a += '';
      return a;
    }
    return a;
  }


  setUpdateFunction(func){
    this.printTimeFunction = func;
  }


  setTime() {
    this.minute = this.twoDigitsNumber(this.getMinutes());
    this.second = this.twoDigitsNumber(this.getSeconds());
  }


  // stopClick() {}
  stopClick() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }


  // resetClick() {}
  resetClick() {
    this.currentTime = 0;
  }


  // splitClick() {}
}