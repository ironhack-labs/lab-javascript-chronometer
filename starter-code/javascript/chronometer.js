class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

   startClick() {
    console.log('start');
    this.intervalId = setInterval(()=>{
      this.currentTime+=1;
    }, 1000);
   }

  getMinutes() {
    let minutes;
    if (this.currentTime > 0) {
      minutes = Math.floor(this.currentTime / 60);
    } else {
      minutes = 0;
    }
    return minutes;
  }

  getSeconds() {
    return this.currentTime % 60;
  }
  
  twoDigitsNumber(rawDigits) {
    let stringifiedDigits = rawDigits.toString();
    if (stringifiedDigits.length < 2) {
      return '0' + stringifiedDigits;
    } else {
      return stringifiedDigits;
    }
  }
  
  stopClick() {
    console.log('stop');
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
   }

  // splitClick() {}
}