class Chronometer {
  constructor(currentTime = 0, intervalId = 0) {
    this.currentTime = currentTime;
    this.intervalId = intervalId;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
    }, 1000);
  }
  getMinutes() {
    // let min = (this.currentTime =+ this.currentTime / 60);
    // let res1 = parseFloat(min);
    // let res2 = Math.floor(res1);
    // if(this.currentTime >= 0){
    // return res2; //our original attempt, Jasmine was ok with it but did not work in live
    return Math.floor(this.currentTime/60);
    }
   
  getSeconds() {
    // let seconds = this.currentTime;
    // let res = seconds % 60;
    // return res; // same as minutes
    return Math.floor(this.currentTime%60);
  }

  twoDigitsNumber(number) {
    let numberString = this.currentTime.toString();
    if(number < 10){
    return "0" + number; 
  } else {return numberString};
  }  
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
    this.stopClick();
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    return `${0}${min}:${0}${sec}`;
  }
}

