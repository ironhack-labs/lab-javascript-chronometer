class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.millsCurrentTime = 0;
    this.millsIntervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(
      function() {
        // console.log('currentTime ==>> ', this.currentTime);
        return this.currentTime++;
      }.bind(this),
      1000
    );
    this.millsIntervalId = setInterval(
      function() {
        return this.millsCurrentTime++;
      }.bind(this),
      10
    );
  }
  getMills(){
    return this.millsCurrentTime % 100;
  }
  getMinutes() {
    //console.log('get minutes ==> ', Math.floor(this.currentTime / 60))
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    //console.log('currentTime getSeconds ==>> ', this.currentTime);
    return this.currentTime % 60;
  }
  twoDigitsNumber(value) {
    if (value.toString().length === 1) {
      return (value = "0" + value.toString());
    } else return (value = value.toString());
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.millsIntervalId);
  }
  resetClick() {
    this.currentTime = 0;
    this.millsCurrentTime = 0;
  }
  splitClick(min, sec, mill) {
    let time = "";
    time = min + ":" + sec + ":" + mill;
    console.log(time);
    return time;
  }
}
