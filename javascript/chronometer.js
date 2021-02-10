class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId =0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() =>{
    this.currentTime +=1;
    callback ()
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
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime =0;
   return this.currentTime;
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec =this.twoDigitsNumber(this.getSeconds());

      return min+ ":" +sec;
    }
  }

