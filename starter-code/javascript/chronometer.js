class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(function(){
      // console.log('currentTime ==>> ', this.currentTime);
      return this.currentTime ++;

    }.bind(this), 1000);
  } 
   getMinutes() {
     console.log('get minutes ==> ', Math.floor(this.currentTime / 60))
    return Math.floor(this.currentTime / 60)
   }
   getSeconds() {
    console.log('currentTime getSeconds ==>> ', this.currentTime);

    return this.currentTime % 60;
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