class Chronometer {
  constructor () {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick () {
    this.intervalId = setInterval(() => {
      this.currentTime++ ;
    }, 1000);
  }

  setMinutes () {
    return this.currentTime%60;
  }

  setSeconds () {
  
  }

  twoDigitsNumber () {
  
  }

  setTime () {

  }
  
  stopClick () {
  
  }

  resetClick () {

  }

}

  









// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
