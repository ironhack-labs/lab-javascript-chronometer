class Chronometer {

  constructor() {
    this.currentTime=0;
    this.intervalId=0;
  }
   startClick() {
     let intervalId=setInterval(()=>{
       this.currentTime ++},1000)
   }
  getMinutes() {
    let timeToMinutes=this.currentTime/60;
    timeToMinutes=parseInt(timeToMinutes)
    if(timeToMinutes !== 0){
      return timeToMinutes}
      else{return 0}
    }
    
    getSeconds(){
    return Math.floor(this.currentTime % 60)
    }
    
    
    twoDigitsNumber(value){
      if (value < 10){
        return ("0"+value)
      }
      return value.toString()
    }
    
    resetClick(){
      let minutes = this.getMinutes()
      let seconds = this.getSeconds() 
      minutes.twoDigitsNumber()
      seconds.twoDigitsNumber()
    
    }
    stopClick () {
      clearInterval(this.intervalId)
    };
    resetClick (){clearInterval(this.currentTime)}
    
    }
    
    
  
  

