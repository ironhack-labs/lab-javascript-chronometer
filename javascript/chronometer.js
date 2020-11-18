class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = 0
  }

  startClick(toto) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      toto();
     }, 10); //for original exercise: increment each 1000
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  //original exercise: return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    return Math.floor(this.currentTime / 100 % 60);
  //original exercise: return this.currentTime % 60
  }
  getMilliseconds(){
    return this.currentTime % 100;
  }
  twoDigitsNumber(callback) {
    let number = callback.toString();
    if (number.length == 1) {
      number = "0" + number
    } ;
    return number;
  }
// HOW DO WE REWRITE THIS IN TERNARY ?

  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    //to switch to the original exercise, get the correct test from the chronometer-spec.js and comment out the right thing
    let min = chronometer.getMinutes();
    let sec = chronometer.getSeconds();
    let milli = chronometer.getMilliseconds();
    if (min < 10) {
      `${0}${min}:${0}${sec}:${0}${milli}`;
    } else {
      `${min}:${sec}:${milli}`;
    }
  }
}
