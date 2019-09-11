class Chronometer {
  constructor() {
    this.seconds = 0;
    this.minutes = 0;
    this.invertalId;
  }
  
  startClick(printseconds, printminutes){
    var fixThis = this;
    this.invertalId = setInterval(function(){
      fixThis.seconds++;
      printseconds();
      printminutes();
      fixThis.getMinutes();
    }, 1000)
  }
  
  getMinutes() {
    if(this.seconds === 60){
      this.minutes++;
      this.seconds = 0;
    }
    if(this.seconds === 60 && this.minutes === 60) {
      this.resetClick();
    }
  }

  twoDigitsNumber(time) {
    let twoDigits
    if(time < 10){
      twoDigits = "0" + time.toString();
    } else {
      twoDigits = time.toString()
    }
    return twoDigits
  }

  stopClick() {
   clearInterval(this.invertalId);
  }

  resetClick() {
    this.seconds = 0;
    this.minutes = 0;
  }

  // splitClick() {}
}