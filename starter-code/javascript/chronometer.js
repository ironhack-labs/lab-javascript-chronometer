class Chronometer {
  constructor() {
    this.currentTime = 0;
  }

  startClick () {
 this.intervalId = setInterval(() => {
    this.currentTime ++;
    console.log(this.currentTime);
  }, 1000);
  }

  getMinutes() {  
    let minute = this.currentTime;
return Math.floor(minute / 60)
  }

  getSeconds() {
   return  Math.floor(this.currentTime % 60)
  }

  twoDigitsNumber(a) {
if (`${a}`.length === 2) {
  return `${a}`; 
}
else {return "0" + a};
  }

  stopClick() {
  clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime === 0;
  }

  // splitClick() {}
}