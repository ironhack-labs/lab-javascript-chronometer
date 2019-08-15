class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentMiliSec =0;
  }
  startClick() {
    let currentSec = 0;
    this.intervalId = setInterval(()=>{
      currentSec += 1;
      if (currentSec ==100){
        this.currentTime += 1;
        currentSec =0;
      }
      
      this.currentMiliSec +=1;
    },10);
    
  }
  
  getMinutes() {
    return Math.floor(this.currentTime /60);
  }
  
  getSeconds() {
    if (this.currentTime == 0 ){
      return 0; 
    }
    return this.currentTime % 60; 
  }
  
  twoDigitsNumber(nb) {
    if (nb<10){
      return ("0"+ nb).toString(); 
    } else {
      let MiliSec = nb.toString();
      return MiliSec[MiliSec.length-2]+ MiliSec[MiliSec.length-1];
    }
  }

  getMiliSec(){ 
  if (this.currentMiliSec == 0 ){
    return 0; 
  }
  return this.currentMiliSec; 
}

  stopClick() {
    window.clearInterval(this.intervalId);
  }
  
  resetClick() {
    this.currentTime = 0; 
    this.currentMiliSec =0;
  }
  // splitClick() {}
}