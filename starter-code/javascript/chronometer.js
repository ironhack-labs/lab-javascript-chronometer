class Chronometer {
  constructor( ) {
    this.currenTime = 0
    this.intervalId = 0
  };
   startClick() {
    this.intervalId = setInterval(() => {this.currenTime += 1},1000)
   }
   getMinutes() {
     let minutes = currenTime/60;
     return Math.floor(minutes);

   }
  getSeconds() {
    return currenTime%60;
  }
  twoDigitsNumber(arg) {
   if ( arg < 10){
    return "0"+arg;
  } else {
    return arg.toString();
  }
   }
  }
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
}