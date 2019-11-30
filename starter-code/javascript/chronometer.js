class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
   startClick() {

   this.intervalId = setInterval(function() {
      this.currentTime++;
    }.bind(this), 1000);
  }
  
  getMinutes() {
    return parseInt(this.currentTime / 60)

  }
  getSeconds() {
    return this.currentTime % 60;
  }



  twoDigitsNumber(num) {
    return (num +"").padStart(2,0)
  }


  stopClick() {
    clearInterval(this.intervalId);
  }
    
  resetClick() {
    this.currentTime = 0;
  }
  //splitClick() {}
}
