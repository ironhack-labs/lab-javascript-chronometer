// Constructor
// function Chronometer() {

class Chronometer  {
  constructor () {    
    this.currentTime = 0;
    this.intervalId = 0;
    
  }
  startClick() {
    this.intervalId=setInterval( () =>{
      this.currentTime+=1; this.setTime()} ,1000);
  }
  setMinutes() {
    return Math.floor(this.currentTime/60);
  }
  setSeconds() {
    return this.currentTime - (Math.floor(this.currentTime/60))*60;
  }
  twoDigitsNumber(n1) {
     if (n1 < 10) {
      return `0${n1}`
     }else {
      return `${n1}`
    }
  }
  setTime(){
    let minutes = this.twoDigitsNumber(this.setMinutes());
    let seconds = this.twoDigitsNumber(this.setSeconds());
  }
  stopClick(){
    clearInterval(this.intervalId);
  }
  resetClick(){
    this.currentTime = 0;
    this.intervalId = 0;
  }

}
