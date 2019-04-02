class Chronometer {
  constructor () {
    this.currentTime = 0;
    this.intervalId = '';
  } 

    startClick() {
    this.intervalId = setInterval (() => {
      console.log(this.currentTime++)
    }, 1000)
    return this.currentTime;
  }
    getMinutes() {
    if (this.currentTime < 60) { 
      return 0; 
    } else {
    let min = Math.floor(this.currentTime / 60);
      return min;
    }
  }
    getSeconds() {
    if (this.currentTime % 60 === 0) {
      return 0
    } else {
    let sec = this.currentTime % 60;
    return Number(sec);
    }
  }
    twoDigitsNumber(arg) {
    if (arg < 10){
      return '0' + arg
    } else {
      return arg.toString()
    }
  }
    resetClick() {
    this.currentTime = 0
    }

    stopClick() {
    clearInterval(this.intervalId)
    }
}

  // splitClick() {}
