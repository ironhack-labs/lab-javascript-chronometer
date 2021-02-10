class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId =0;
  }
  startClick(callback) {
    const interval = setInterval(() =>{
    this.currentTime +=1;

    },1000)}
  
  getMinutes() {
    const minutes = (this.currentTime-this.currentTime%60)/60 ;
    return minutes;
  

  }
  getSeconds() {
     const second= this.currentTime%60
     return second;
  }
  twoDigitsNumber(value) {
   if(value < 10){value="0"+value}
   return value
  }
  stopClick(interval) {
    clearInterval(interval);
  }
  resetClick() {
    this.currentTime =0;
   return this.currentTime;
  }
  splitClick() {
    let min = this.getMinutes();
    let sec =this.getSeconds();

    if (min < 10 && sec < 10) {
      return this.twoDigitsNumber(min)+":"+this.twoDigitsNumber(sec)
     } else if (min < 10 && sec > 10) { return this.twoDigitsNumber(min)+":"+sec}
     else if (min > 10 && sec < 10) { return min+ ":" +this.twoDigitsNumber(sec)}
    else {
      return min+ ":" +sec;
    }
  }
}
