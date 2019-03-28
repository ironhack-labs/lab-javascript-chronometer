class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  };

  startClick() {
    this.intervalId = setInterval(() => {this.currentTime += 1}, 1000);
  }
  
  getMinutes() {
    var minutes = this.currentTime/60;
    return Math.floor(minutes);
  }

  getSeconds() {
    return this.currentTime%60;
  }

  twoDigitsNumber(arg) {
    if (arg<10){
      return "0"+arg;
    } else {
      return arg.toString();
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(interv1);
    clearInterval(interv2);
  }
  
  resetClick() {
    this.currentTime = 0;
  }

  // splitClick() {}
}
