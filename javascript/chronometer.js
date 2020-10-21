class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime =0;
    this.intervalId =0;
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>this.currentTime++,1000);
  //console.log("start");
  }
  getMinutes() {
    // ... your code goes here
    return Math.floor((this.currentTime/60));
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime -this.getMinutes()*60;
  }
  twoDigitsNumber(number) {
    // ... your code goes here
   return number<10 ? `0${number}` : `${number}`;

  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
    //console.log("stop");
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    let min = this.getMinutes();
    let sec = this.getSeconds();
    //return min<10? `${0}${min}:${0}${sec}` : `${min}:${sec}`;
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`;
  }
}
