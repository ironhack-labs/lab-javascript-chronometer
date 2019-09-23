class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId
    this.mSecond = 0
    
  }
   startClick() {
      
      
      this.intervalId = setInterval(() =>{
        if (this.mSecond===100){
          this.currentTime++
          this.mSecond=0
        }
        this.mSecond++
        
        printTime()
        
          
    },10);
}
  getmilSeconds() {
    return this.mSecond
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    return this.currentTime - (this.getMinutes()*60)
  }
   twoDigitsNumber(item) {
     if(item<=9){
       return `0${item}`
     }else{
       
       return item.toString()
     }
   }
   stopClick() {
    clearInterval(this.intervalId)
   }
   resetClick() {
    this.currentTime = 0
    this.mSecond = 0
    printTime()
   }
   splitClick() {
    
   }
}