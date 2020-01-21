class Chronometer {
  constructor() {

    this.currentTime = 0;
    this.intervalId = setInterval(this.startClick, 1000);
  }
     startClick() {

     setInterval(() => {

       this.currentTime++;

      },1000);

     }
  // getMinutes() {}
  // getSeconds() {}
  // twoDigitsNumber() {}
  // stopClick() {}
  // resetClick() {}
  // splitClick() {}
    }
  