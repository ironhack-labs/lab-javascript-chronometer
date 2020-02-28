class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=0;
    this.increment= this.increment.bind(this);
    this.started=false;
  }
  
  startClick() {
    this.intervalId = setInterval(this.increment, 1000);
    console.log("startclick called!");

  }
  increment(){
    this.currentTime++
  }
  getMinutes() {
    var minutes = Math.floor(this.currentTime/60);
    return minutes;
  }
  getSeconds() {
    var seconds = (this.currentTime%60);
    return seconds;
  }

  twoDigitsNumber(digit) {
    var stringDigit = digit.toString();
    if(stringDigit.length===1){
      var twoDigit = '0' + stringDigit;
      return twoDigit;
    }else{
      return stringDigit;    
    }

  }
  stopClick() {
    clearInterval(this.intervalId);
    console.log("Stop click called!");
  }
  resetClick() {
    this.currentTime=0;
  }
  // splitClick() {}
}

