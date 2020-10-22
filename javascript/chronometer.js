class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentTimeMs = 0;
    this.intervalId = 0;
    this.intervalIdMs = 0
  }
  startClick() {
    this.intervalId = setInterval(()=>{
      this.currentTime++;
    },1000)

    this.intervalIdMs = setInterval(()=>{
      this.currentTimeMs++;
    },10)
  }
  getMinutes() {
  const min= Math.floor(this.currentTime/60)
  return min
  }
  getSeconds() {
  const seg= Math.floor(this.currentTime % 60)
  return seg
  }
  getMiliSeconds(){
    if(this.currentTimeMs===100){
      this.currentTimeMs = 0;
    }
    else {
      return this.currentTimeMs;
    }
    
  }
  twoDigitsNumber(number){
    if(number.toString().length === 1){
      return `0${number}`
    }
    else{
      return number.toString()}
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdMs);
  }
  resetClick() {
    this.currentTime = 0;
    this.currentTimeMs = 0;
  }
  splitClick() {
  return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMiliSeconds())}`;
  }
}
