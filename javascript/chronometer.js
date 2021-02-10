class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    const intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    return Math.trunc(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(num) {
    if (num > 9) {
      return ""+num;
    } else {
      return "0" + num;
    }
  }

  stopClick() {
    const intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
    clearInterval(intervalId);
  }

  resetClick() {
    this.currentTime = 0;
    return this.currentTime;
  }

  splitClick() {
    //console.log(this.currentTime);
    let min=this.getMinutes();
    let sec=this.getSeconds();
    //console.log(min, sec);
    //console.log(this.twoDigitsNumber(min)+":"+this.twoDigitsNumber(sec));
    return this.twoDigitsNumber(min)+":"+this.twoDigitsNumber(sec);
   
   
  }
 
}
