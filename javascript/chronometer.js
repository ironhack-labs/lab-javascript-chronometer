class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = 0;

  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      if (callback) {
        callback();
      }
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  twoDigitsNumber(number) {
    console.log(number);
    if (number < 10) {
      return `0${number}`
    } else {
      return `${number}`;
    }
    
  }

  stopClick() {
    clearInterval(this.intervalId);
  } 

  resetClick() {
    return this.currentTime = 0;
  }

  splitClick() {

    return this.twoDigitsNumber(this.getMinutes()) + ':' + this.twoDigitsNumber(this.getSeconds());

  
  }
}



