


class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    let total = 1;
    let intervalId = setInterval(() => {
      console.log(total);
      this.currentTime += 1;
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/1/60);
  }
  
  getSeconds() {
    return (this.currentTime%60);
  }
  
  twoDigitsNumber(twoDigits) {
  if (twoDigits < 10) {
    return `0${twoDigits}`;
  } else {
    return `${twoDigits}`
  }
  }

  
  stopClick() {
    clearInterval(this.intervalId)
    }
  
  resetClick() {
    this.currentTime = 0;
  }
  
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`
  };
}
