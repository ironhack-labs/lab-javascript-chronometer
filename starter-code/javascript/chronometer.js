export default class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  };

  startClick() {
    this.intervalId = setInterval(()=>{
      this.currentTime += 1;
      this.getMinutes();
      this.getSeconds();
    }, 1000);
  };

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
    return minutes;
  };

  getSeconds() {
    let seconds = this.currentTime-(this.getMinutes()*60);
    console.log(seconds);
    return seconds;
  };

  twoDigitsNumber(num) {
    if ( num.toString().length == 1 ){
       return "0"+num;
    }
    return num.toString();
  };

  stopClick() {
    clearInterval(this.intervalId);
  };

  resetClick() {
    this.currentTime = 0;
  };

  splitClick() {

  };
};
