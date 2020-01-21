class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
     this.intervalId = setInterval(() => {
       printTime()
        this.currentTime = this.currentTime + 1;
      }, 1000);
  }

   getMinutes() {
    var minutes = Math.floor(this.currentTime / 60);
    return minutes;
   }


  getSeconds() {
    var minutes = Math.floor(this.currentTime / 60);
    var seconds = this.currentTime - minutes * 60;
    return seconds;
  }

  twoDigitsNumber(arg){
    if(arg < 10){
        arg = "0"  + arg.toString();
        return(arg);
      }
    else if(arg >= 10){
      return(arg.toString());
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }


  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}