class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  

  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
      printTime()
    }, 100);

  }
  getMinutes() {
    console.log(Math.floor(this.currentTime / 60))
    return Math.floor(this.currentTime / 60);

  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);


  }
  twoDigitsNumber(num) {
    if (num.toString().length < 2) {
      return `0${num.toString()}`
    } else {
      return `${num.toString()}`
    }
  }


  stopClick() {
    clearInterval(this.intervalId);
  }
  
  resetClick() {
    return this.currentTime=0;



  }
  // splitClick() {}
}