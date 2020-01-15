class Chronometer {
  constructor() {
    this.currentTime=0,
    this.intervalId=0
  }

  startClick() {
  this.intervalId=  setInterval(()=>{
      this.currentTime++;
    },1000)
  }


  getMinutes() {
  return  Math.floor(this.currentTime / 60) 
   
  }

   getSeconds() {
     return Math.floor(this.currentTime - this.getMinutes() *60)
   }
   twoDigitsNumber(numero){
     if(numero<10){
   return '0'+numero
     }
     else{
    let decimales=Math.floor(numero/10)
    let unidades=numero-(decimales*10)
   return `${decimales}${unidades}` 
     } 
  }
   
   
  stopClick() {
   return clearInterval( this.intervalId) 

  }
  resetClick() {
    this.currentTime=0
    return clearInterval(0)

  }
  // splitClick() {}

}