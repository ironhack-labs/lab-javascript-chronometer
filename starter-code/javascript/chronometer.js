class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
      startClick() {
        this.intervalId = setInterval(() => {
          this.currentTime++;
    }, 1000)
  }
  getMinutes() {
    return  Math.floor(Math.round(this.currentTime/ 60));
  }
  getSeconds() {
    return Math.floor(Math.round(this.currentTime & 60));
  }
  twoDigitsNumber(numb) {
        if(numb < 10){
             return `0${numb}`;
        }else{
            return `${numb}`;
        }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
this.currentTime = 0;
  }



  // splitClick() {}
}