class Chronometer {
  constructor() {
   this.currentTime= 0 ;
   this.intervalId= 0 ;
  }
  
    startClick(callback) {    
      
      const increaseTime = () => {
      this.currentTime++;
    };   
    
    this.intervalId = setInterval(increaseTime, 1000);

  }


  getMinutes() {

  const minutes= Math.floor(this.currentTime / 60);
  return minutes;

  }
  getSeconds() {
   
  const seconds= this.currentTime % 60;
  return seconds;
  }

  twoDigitsNumber(num) {
   
      return ("0" + num).slice(-2)
    
     }


  stopClick() {
    
    clearInterval(this.intervalId)

  }
  resetClick() {
    this.currentTime=0

  }
  splitClick() {

    let min=  this.getMinutes();
    
    let sec= this.getSeconds();

     return `${0}${min}:${0}${sec}`
 
  }

}
 /*
The splitClick() method needs to capture the moment when the split button gets hit 
later on. Imagine this being a time frame in which a runner runs certain distances. 
The splitClick() will receive any two numbers and needs to output them in a valid 
format. For more information, check the corresponding test*/