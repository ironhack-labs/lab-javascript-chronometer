class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  };
  startClick(callback) {
    //Option 1 var t=setInterval(this.currentTime,1000);
    // Option 2 $(function(){
    //   setInterval(this.currentTime, 1000);
    //   });
    //     setInterval(function() => {
    //   console.log('I am called');
    // }, 1000);
setInterval (() => { 
  this.currentTime++}, 1000)
  }; 
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  };
  getSeconds() {
    return Math.floor(this.currentTime % 60);
  };
  twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
