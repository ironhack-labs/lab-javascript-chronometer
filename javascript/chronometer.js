class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime =0;
    this.intervalId =0;

  }
  startClick(callback) {
    // ... your code goes here
    // increment by 1 the currentTime property every 1 second
    this.intervalId = setInterval(() =>{
        this.currentTime ++;
    },1000);
  }
  getMinutes() {
    // ... your code goes here
  //  return the currentTime in minutes
   //return 0 when the currentTime counting haven't started
      return Math.floor(this.currentTime / 60);
 
  }
  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60);
  }
  twoDigitsNumber(num) {
    // ... your code goes here
    //turn into two-digits number any received value
    if (num >= 0 && num <10){
      return '0'+ num
    } else {
      return num.toString()
    }

  }
  stopClick() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    return this.twoDigitsNumber(this.getMinutes()) + ':' + this.twoDigitsNumber(this.getSeconds());
  }
}
