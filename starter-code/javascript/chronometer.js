class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = setInterval(function(){ 
      return this.currentTime += 1;
      }, 1000)
  }
  startClick(){
    return this.intervalId
  }
  // getMinutes() {}
  // getSeconds() {}
  // twoDigitsNumber() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}
var chrono = new Chronometer
chrono.startClick()