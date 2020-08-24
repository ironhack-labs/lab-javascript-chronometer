class Chronometer {
  constructor() {
    this.currentTime = 0;
      this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() =>{
      this.currentTime += 1;
    }, 1000);
  }
  getMinutes() {
  
    return Math.floor(this.currentTime/60);
  
  }
  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0){
      return 0
    }
    return Math.floor(this.currentTime % 60);
  
  }
  twoDigitsNumber(value) {
    // ... your code goes here
    if(value >= 10){
      return value.toString()
    }else{
      return "0" + value.toString()
    }


  }
  stopClick() {
    return clearInterval(this.intervalId)
  }
  resetClick() {
    return this.currentTime = 0;
  }
  
  splitClick() {
 
    return (this.twoDigitsNumber(this.getMinutes())) + ":" + this.twoDigitsNumber(this.getSeconds())
  }
}
