// Constructor
// function Chronometer() {}

// class Chronometer {
//   constructor() {
//     this.currentTime = 0;
//     this.intervalId = 0;
//     this.miliSecond = 0;
//     this.IntervalId2 = 0;
//   }

//   startClick() {
//     var that = this;
//     this.IntervalId = setInterval(function() {
//       that.currentTime++;
//       that.setTime();
//     }, 1000);

//     this.setCentiSecond();
//   }

//   setMinutes() {
//     return Math.floor(this.currentTime / 60);
//   }

//   setSeconds() {
//     return this.currentTime % 60;
//   }

//   setCentiSecond() {
//     var that = this;
//     this.IntervalId2 = setInterval(function() {
//       that.miliSecond++ % 100;
//     }, 10);
//   }

//   twoDigitsNumber(a) {
//     return ("0" + a.toString()).substr(-2);
//   }

//   setTime() {
//     var minutes = this.twoDigitsNumber(this.setMinutes());
//     var seconds = this.twoDigitsNumber(this.setSeconds());
//     return minutes + seconds;
//   }

//   stopClick() {
//     clearInterval(this.IntervalId);
//     clearInterval(this.IntervalId2);
//   }

//   resetClick() {
//     this.currentTime = 0;
//     this.miliSecond = 0;
//   }
// }

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    var that = this;
    this.IntervalId = setInterval(function() {
      that.currentTime++;
      that.setTime();
    }, 10);
  }

  setMinutes() {
    return Math.floor(this.currentTime / 100 / 60);
  }

  setSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }

  setCentiSecond() {
    return Math.floor(this.currentTime % 100);
  }

  twoDigitsNumber(a) {
    return ("0" + a.toString()).substr(-2);
  }

  setTime() {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    var miliSecond = this.twoDigitsNumber(this.setCentiSecond());
    return minutes + seconds + miliSecond;
  }

  stopClick() {
    clearInterval(this.IntervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }
}
