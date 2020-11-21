class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentTimeMilli = 0;
    this.intervalIdMilli = 0;
  };

  // Function startClick integrating the milliseconds bonus
    startClick(callback) {
      this.intervalId = setInterval(()=>{

        this.currentTimeMilli++;
        if (this.currentTimeMilli === 100) {
          this.currentTime++;
          this.currentTimeMilli = 0;
        }
        if (callback) callback()
      }, 10);
  
  };

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  };

  getSeconds() {
    return this.currentTime % 60;
  };

  getMilliSeconds() {
    return this.currentTimeMilli;
  }

  twoDigitsNumber(time) {
    if (time < 10) {
      return '0'+time;
    }
    return time.toString();
  };

  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.intervalIdMilli)
  };

  resetClick() {
    this.currentTime = 0;
    this.currentTimeMilli = 0;
  };


  //Function splitClick without the milliseconds to avoid breaking Jasmine tests
  splitClick() {
   const min = this.getMinutes();
   const sec = this.getSeconds();
   const twoDMin = this.twoDigitsNumber(min);
   const twoDSec = this.twoDigitsNumber(sec);
   const currTime = `${twoDMin}:${twoDSec}`
   return currTime;
  };
}
