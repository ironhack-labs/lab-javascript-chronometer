class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(()=>{
      this.currentTime++;
    },1000)
  }
  getMinutes() {
  const min= Math.floor(this.currentTime/60)
  return min
  }
  getSeconds() {
  const seg= Math.floor(this.currentTime % 60)
  return seg
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
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
  return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}
