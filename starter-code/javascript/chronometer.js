class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=0;

  }
  startClick() {
    let fixThis=this;
    fixThis.intervalId=setInterval(function(){
      fixThis.currentTime++;
    },1000);
  }
  getMinutes() {
    let fixThis=this;
    let numOfMin=Math.floor(fixThis.currentTime/60);
    return numOfMin;
  }
  getSeconds() {
    let fixThis=this;
    var numOfSec=0;
   numOfSec=fixThis.currentTime%60;
    return numOfSec;
  }
  twoDigitsNumber(number) {
    number=number.toString();
    if(number.length<2){
      number="0"+number;
    }
    return number;
  }
  setTime(){
    let fixThis=thisM
      let minutes=fixThis.twoDigitsNumber(fixThis.getMinutes());
      let seconds=fixThis.twoDigitsNumber(fixThis.getSeconds());
  }
  stopClick() {
    let fixThis=this;
    clearInterval(fixThis.intervalId)
  }
  resetClick() {
    this.currentTime=0;
  }
}