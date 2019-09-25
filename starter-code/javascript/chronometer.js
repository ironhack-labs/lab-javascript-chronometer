class Chronometer {
  constructor() {
    let currentTime; 
    this.currentTime = 0;
   }
   
  
  startClick() {
    this.intervalId = setInterval(()=>this.currentTime++,1000);
    
  }


  getMinutes() {
    let minut= Math.floor(this.currentTime/60)
    return minut
  }

  getSeconds() {
    let second = this.currentTime%60   
    return second
  }

  getMiliSeconds(){
    let milSec = Math.floor((this.currentTime/60000)*1000000)
    return milSec
  }

  twoDigitsNumber(number) {
    if(number>=10){
      return String(number)
    }
    else {
      return '0'+ String(number)
    }
  }

  stopClick() {                                                                                                                                                        
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime=0;
  }

  splitClick() {
    let minut= Math.floor(this.currentTime/60)
    let second = this.currentTime%60
    let milSec = Math.floor(this.currentTime/60)
    return minut,second,milSec
  }

}