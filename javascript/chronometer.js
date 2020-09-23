class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
    this.currentTime += 1
  }, 1000);
  }

    getMinutes() {
      let min = Math.floor(this.currentTime / 60);
      return min;
    }

    getSeconds() {
      let min = Math.floor(this.currentTime / 60);
      let sec = this.currentTime - min * 60;
      return sec;
    }

    twoDigitsNumber(digit) {

       if (digit < 10) { 
       return "0" + digit
    }
  }
    stopClick() {
      clearInterval(this.intervalId);
    }
    resetClick() {
      this.currentTime = 0;
    }
    splitClick() {
      return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds())
    }
  }
