class Chronometer {
  
  constructor() {
    this.currentTime=0;
    this.intervalId='';
  }


   startClick() {
     console.log('----- chrono starts');
     
     this.intervalId=setInterval( () => {this.currentTime++}, 1000)   
   }

   getMinutes() {
     return parseInt(this.currentTime/60)
   }
   
   getSeconds() {
    return parseInt(this.currentTime%60)
   }

   twoDigitsNumber(integer) {
      if(integer<10)
      {
        return "0"+integer
      }
      else return integer.toString() 
   }

   stopClick() {
     console.log('----- chrono stops-----');
     
      return clearInterval(this.intervalId) 
   }
   
   resetClick() {
     return (this.currentTime=0)
   }

   splitClick() {
     min=this.twoDigitsNumber(this.getMinutes())
     sec=this.twoDigitsNumber(this.getSeconds())
     return min +':'+sec
   }
}