class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {  
    this.intervalId = setInterval(()=>{
     this.currentTime++;
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
  // splitClick() {}
}