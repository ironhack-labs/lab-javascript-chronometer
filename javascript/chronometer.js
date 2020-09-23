class Chronometer {
  constructor() {
    this.currentTime = 0; 
    this.intervalId = 0; 
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
    this.currentTime += 1
    // this is where i want to invoke the code //this callback will update the DOM
  }, 1000);
  }


  getMinutes() {
    let min = Math.floor(this.currentTime / 60);
    return min
  };


  getSeconds() {
    let min = Math.floor(this.currentTime / 60);
    let sec = this.currentTime - min * 60;
    return sec;
  }


  twoDigitsNumber(num) {
    if (num < 10) {
      return "0" + `${num}`
    } else {
      return `${num}`
    }
  }


  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}
