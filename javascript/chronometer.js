class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++; 
    }, 1000);
  } 
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes
  }
    
  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60);
    return seconds
  }
    
  twoDigitsNumber() {
    if (currentTime < 10)
    { return "0" + currentTime;
  } else {
      return `${currentTime}`;
     }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
   let minutes = this.twoDigitsNumber(this.getMinutes);
   let seconds = this.twoDigitsNumber(this.getSeconds);
   let milliseconds = this.currentTime(this.getMilliseconds())
   return `${minutes}:${seconds}:${milliseconds}`;
  }


  //Bonus

  getMilliseconds() {
    let milliseconds = math.floor(this.currentTime % 10)
      return milliseconds;
  }