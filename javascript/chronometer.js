//jshint esversion: 6

class Chronometer {
  constructor() {}

  currentTime = 0;
  intervalId = 0;

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    var minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    var seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }

  twoDigitsNumber(num) {
    var outputNum = num.toString();
    if (num < 10) {
      outputNum = "0" + num.toString();
  }
  return outputNum;
}

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    // var min = this.getMinutes();
    // var sec = this.getSeconds();
    var minute = this.twoDigitsNumber(this.getMinutes());
    var second = this.twoDigitsNumber(this.getSeconds());
    return `${minute}:${second}`;
  }

}



// constructor() {
//   // ... your code goes here
// }
// startClick(callback) {
//   // ... your code goes here
// }
//   getMinutes() {
//     // ... your code goes here
//   }
//   getSeconds() {
//     // ... your code goes here
//   }
//   twoDigitsNumber() {
//     // ... your code goes here
//   }
//   stopClick() {
//     // ... your code goes here
//   }
//   resetClick() {
//     // ... your code goes here
//   }
//   splitClick() {
//     // ... your code goes here
//   }
// }