
class Chronometer { 
  constructor() {     
    this.currentTime = 0    
    this.intervalId = undefined   }     
startClick() {    
     this.intervalId= setInterval(()=>{ 
     this.currentTime  += 1;     
     },1000)     }    
 getMinutes() {    
    return Math.floor(this.currentTime/60)  
   }     
   getSeconds() {    
    this.seconds = this.currentTime >= 60 ? this.currentTime - 60 : this.currentTime   
        return this.currentTime % 60    
       }   
 twoDigitsNumber(time) {    
    return `${time}`.padStart(2 , '0')   }     
 stopClick() {     
     clearInterval()     }     
 resetClick() {

 }   
 splitClick() {

 } }