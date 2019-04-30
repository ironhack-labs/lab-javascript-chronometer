class Chronometer {
  constructor() {
    (this.currentTime = 0), this.intervalId;
  }

  startClick() {
    const currentTime = setInterval(() => {
      this.currentTime++;
      console.log(this.currentTime)
      printTime()
    }, 1000);
    this.intervalId = currentTime;
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60
  }
 
  twoDigitsNumber(num) {
  
    if (String(num).length < 2) {
      return '0' + num
    } else {
      return String(num)
    }

  }

  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}
