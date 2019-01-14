class Chronometer {
  constructor(){
    this.currentTime = 0;
    this.intervalId = undefined;
  }
  startClick(){
    this.intervalId = setInterval(()=>{
      this.currentTime ++;
      this.setTime();
    }, 1)
  }
  stopClick(){
    clearInterval(this.intervalId)
  }
  resetClick(){
    this.currentTime = 0;
  }
  setMinutes(){
    return Math.floor(this.currentTime/60000);
  }
  setSeconds(){
    return Math.floor(this.currentTime/1000);
  }
  setMilliseconds(){
    return Math.floor(this.currentTime%1000/10);
  }
  twoDigitsNumber(num){
    return ("0"+num).substr(-2);
  }
  setTime(){
    return this.twoDigitsNumber(this.setMinutes()) + ":" + this.twoDigitsNumber(this.setSeconds()) + ":" + this.twoDigitsNumber(this.setMilliseconds()) ;
  }
}