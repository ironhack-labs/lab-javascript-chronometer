class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      printTime(minutes, seconds); 
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
  
  //Bonus

 /* getMilliseconds() {
    let milliseconds = math.floor(this.currentTime % 10)
      return `${milliseconds}`;
  } */
  
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
    printTime('00','00');
  }

  splitClick() {
   let minutes = this.twoDigitsNumber(this.getMinutes);
   let seconds = this.twoDigitsNumber(this.getSeconds);
   /*let milliseconds = this.currentTime(this.getMilliseconds())*/
   /*return `${minutes}:${seconds}:${milliseconds}`;*/
   return `${minutes}:${seconds}`;
  }
