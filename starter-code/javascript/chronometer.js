class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId 
  }
   startClick() {
      this.currentTime = 0
      this.intervalId = setInterval(() =>{
      this.currentTime++
      printTime()
    }, 1000);
    

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
    printTime()
   }
   splitClick() {
    
   }
}