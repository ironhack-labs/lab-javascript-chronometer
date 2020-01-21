class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;

  }

  startClick() {
    this.intervalId = setInterval(() => {
      printTime();
      this.currentTime++;
    }, 1000)
  }


  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }


  twoDigitsNumber(time) {
    if (time === 0) return ("00");
    else if (time < 10) return (`0${time}`)
    else return `${time}`

  }
  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    return this.currentTime = 0;
  }
  
  // splitClick() { 
  //   return this.currentTime
  // }


}