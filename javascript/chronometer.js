class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=0;
  }
  startClick(callback) {
    this.intervalId=setInterval(()=>{
      this.currentTime+=1
     
    },1000)
  }
  getMinutes() {
    // ... your code goes here
    const minutos = Math.floor(this.currentTime/60)
    return minutos 
  }

  getSeconds() {
    
      // ... your code goes here
      const segundos = this.currentTime % 60
      return segundos
    }
  
  twoDigitsNumber(num) {
      if(num<10){
        return "0" + num.toString()
      }else {
        return num.toString()
      }
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
    this.currentTime=0;
  }
  splitClick() {
    // ... your code goes here
    return this.twoDigitsNumber(this.getMinutes(this.getMinutes)) + ":" + this.twoDigitsNumber(this.getSeconds())
    
  }
}
