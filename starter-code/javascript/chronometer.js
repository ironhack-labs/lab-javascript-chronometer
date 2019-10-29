class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  //printTime parameter
  startClick() {  
    this.intervalId = setInterval(()=>{
     this.currentTime++;
     printTime();
    },1000)    
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(time) {

    let timeToString = time.toString();

    if (timeToString.length === 1){
      return "0" + timeToString;
    }else{
      return timeToString;
    }
    
  }
  stopClick() {
    return clearInterval(this.intervalId)
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    let minu = this.twoDigitsNumber(this.getMinutes());
    let secu = this.twoDigitsNumber(this.getSeconds());
    return `${minu}:${secu}`;
  }
}