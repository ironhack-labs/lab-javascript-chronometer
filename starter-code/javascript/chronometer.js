class Chronometer {
  constructor() {
  this.currentTime = 0,
  this.intervalId = ""
}

  startClick() {
    function increment() {
      this.currentTime++;
    }
  this.intervalId = setInterval(increment.bind(this),1000);  
  }
  getMinutes() {
    return Math.trunc(this.currentTime /60);
  }
  getSeconds() {
    return  this.currentTime - (this.getMinutes()*60);
  }

  twoDigitsNumber(value) {
    if(value < 10) return `0${value}`;
    else {return `${value}`};


  }
   
  stopClick() {
    return clearInterval(this.intervalId);

  }

  resetClick() {
    return this.currentTime = 0;

  }
  splitClick() {
    
  }
} 
