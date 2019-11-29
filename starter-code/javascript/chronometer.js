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
    this.currentTime = Math.round(this.currentTime * 60)
    return this.currentTime;
  }



  twoDigitsNumber(num) {
    return (num +"").padStart(2,0)

    /*
    function twoDigits(num){
      num = num.toString();
      if (num.length === 1){
        num = "0".concat(num);
        return parseInt(num,10);
    }
    return parseInt(num,10);
    }
    */
  }


  stopClick() {
    clearInterval(this.intervalId);
  }
    
  resetClick() {
    this.currentTime = 0;
  }
  //splitClick() {}
}
