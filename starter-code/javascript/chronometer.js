class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.splits = [];
    // this.startClick = this.startClick.bind(this);
  }
 startClick() {
   var interval = this
   this.intervalId = setInterval(function(){
     interval.currentTime++;
   }, 1000)
 }
  getMinutes() {
    let mins = Math.floor(this.currentTime / 60);
    return mins;
  }
  getSeconds() {
    let secs = this.currentTime % 60;
    return secs;
  }
  twoDigitsNumber(timeElement) {
    let twoDgtTime = "";
    if (timeElement >= 100) {
      timeElement = timeElement % 100;
    }
    if (timeElement<10) {
      twoDgtTime = "0"+timeElement.toString();
    } else {
      twoDgtTime = timeElement.toString();
    };
    
    return twoDgtTime;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
    this.splits = [];
  }
  splitClick() {
    let mins = this.twoDigitsNumber(this.getMinutes());
    let secs = this.twoDigitsNumber(this.getSeconds());
    this.splits.push([mins,secs]);
  }
}