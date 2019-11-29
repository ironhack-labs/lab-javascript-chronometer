class Chronometer {
  //Constructor
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  //Methods
  startClick() {
    let that = this;
    this.intervalId = setInterval(function () {
      that.currentTime++;
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  
  getSeconds() {
    return this.currentTime % 60;
  }
  
  twoDigitsNumber(number) {
    number = String(number);
    number = number.padStart(2, '0');
    return number;
  }
  
  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0;
  }

  // splitClick() {}
}