class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentTimeMilliSeconds = 0;
    this.intervalIdMilliSeconds = 0;
  }
  startClick() {
    this.intervalId = setInterval(function(){
      this.currentTime+=1
      //console.log('tiume',this.currentTime)
    }.bind(this),1000)
  }
  startClickMilliSeconds() {
    this.intervalIdMilliSeconds = setInterval(function(){
      this.currentTimeMilliSeconds+=1
      //console.log('tiume',this.currentTime)
    }.bind(this),1)
  }
  getMinutes(){
    //console.log('getminutes',Math.floor(this.currentTime/60))
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    //console.log('getSeconds',Math.floor(this.currentTime%60))
    return Math.floor(this.currentTime%60);
  }
  getMilliSeconds() {
    return Math.floor(this.currentTimeMilliSeconds);
  }
  twoDigitsNumber(time){
    time = new String(time)
    if(time.length < 2) return '0' + time;
    return time;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0
    this.currentTimeMilliSeconds = 0
  }
  splitClick() {}
}