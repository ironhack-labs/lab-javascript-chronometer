class Chronometer {
  constructor() {
    this.currentTime = 0 ;
    this.intervalId;
  }

  startClick(clbk) {
    this.intervalId = setInterval( () => {
      this.currentTime ++;
      let minutes = (this.twoDigitsNumber(this.getMinutes()));
      let seconds = (this.twoDigitsNumber (this.getSeconds()));
      clbk(minutes, seconds);
      }, 1000 );
  }

  getMinutes() {
    let timeInMinutes = this.currentTime / 60;
    return Math.trunc(timeInMinutes);
  }
  getSeconds() {
    return this.currentTime%60 ;
  }

  twoDigitsNumber(number) {
   let twoDigits = String(number);
   if(twoDigits.length ===1 ) return "0"+twoDigits;
   if(twoDigits.length > 1) return twoDigits;
  }
  stopClick() {
    clearInterval (this.intervalId)
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}

let chrono = new Chronometer;

