class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      return this.currentTime ++;
    }, 1000);
  } 
   getMinutes() {
    return this.currentTime = Math.floor(this.currentTime / 60)
   }
   getSeconds() {
    return this.currentTime = this.currentTime % 60;
   }
   twoDigitsNumber(value) {
    if (value.toString().length === 1){
      return value =  "0" + value.toString();
    }else return value = value.toString();
   }
   stopClick() {
    clearInterval(this.intervalId);
   }
   resetClick() {
    this.currentTime = 0;
   }
  // splitClick() {}
}