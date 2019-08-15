class Chronometer {
  constructor() {
    this.currentTime=2626;
    this.intervalId=0;
   
    
  }
  startClick() {
    this.intervalId=setInterval(()=>{
      this.currentTime++;
      //console.log(this.currentTime)
    },1000)
    return this.currentTime;
  }


  getMinutes() {
    
    var minutes=Math.floor(this.currentTime/60);
    //minutes=Math.floor(temp);
    return minutes;
    
  }
  getSeconds() {
  var seconds=this.currentTime%60;
  return seconds;  

  }


  twoDigitsNumber(time) {
    var toStringMinutes=time.toString();
    if(toStringMinutes.length===1){
      return ("0"+toStringMinutes);
    } 
    return toStringMinutes;

  }
  stopClick() {
    //window.clearInterval(this.currentTime)
    window.clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime=0;
  }
    splitClick() {  
    this.currentTime;
    
}
}