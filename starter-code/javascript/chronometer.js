class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minute = 0;
    this.second = 0;
    this.milisec = 0;
    this.printTimeFunction = null;
  }
  startClick() {
    let fixThis = this
    this.intervalId = setInterval(function () {
      fixThis.currentTime++;
      fixThis.setTime();
      fixThis.printTimeFunction()
    }, 1000);
  }
  getMinutes() {
    var minute = Math.floor(this.currentTime / 60);
    return minute;
  }
  getSeconds() {
    var second = this.currentTime % 60;
    return second;
  }
  getMiliseconds(){

    this.milisec = setIntervalId(function(){
      this.milisec++;
      fixThis.setTime();
      fixThis.printTimeFunction();
    },
    10)  
    return milisec;
  }

  twoDigitsNumber(a) {

    if (a < 10) {
      var a = '0' + a;
    } else {
      a += '';
      return a;
    }
    return a;
  }

  setUpdateFunction(func){
    this.printTimeFunction = func;
  }


  setTime() {
    this.minute = this.twoDigitsNumber(this.getMinutes());
    this.second = this.twoDigitsNumber(this.getSeconds());
    this.milisec = this.twoDigitsNumber(this.getMiliseconds());
  }

  stopClick() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }

  resetClick() {

    this.currentTime = 0;
    this.intervalId = 0;
    this.setTime();
    this.printTimeFunction();
  }

  splitClick() {
    return `${this.minute}:${this.second}:${this.milisec}`;
  }

  isRunning() {
    return this.intervalId != 0;
  }

}