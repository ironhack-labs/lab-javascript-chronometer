class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  //Starts an interval to make currentTime add 1 every second.
  //
  startClick() {
    this.intervalId = setInterval(()=>{
      this.currentTime++;
    },1000);
  }

  //Gets the current minutes
  getMinutes() {    
      return Math.floor(this.currentTime / 60);
    }  

  //Gets current seconds  
  getSeconds() {
    return (this.currentTime % 60);
  }

  // getMiliseconds(){
  //   return (this.currentTime % 100);
  // }
  
  //Adds a zero to the number whenever it's only 1 digit to make it fit a timer format
  twoDigitsNumber(value) {
    if(value<10){
      value="0"+value;
    }

    return ""+value;
  }
  //Stops the timer
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {}
  splitClick() {}
}