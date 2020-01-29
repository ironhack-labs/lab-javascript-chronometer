class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId =0;

    

  }
  stopClick() {
  this.intervalId = setInterval(() => {
    this.currentTime++;
  }, 1000);
}
getMinutes() {
var timetoMinutes = this.currentTime/60;
return Math.trunc(timetoMinutes);
}
getSeconds() {
var timetoSeconds = this.currentTime % 60;
return timetoSeconds;
}


twoDigitsNumber(value) {
  if (value < 10) {
  return 0 + value.toString();
}
  else {
    return value.toString(); }

}

stopClick() {
  clearInterval(this.intervalId);

}

resetClick() {
  this.currentTime = 0;
}

splitClick() {}
}

let chrono = new Chronometer;
chrono.startClick();