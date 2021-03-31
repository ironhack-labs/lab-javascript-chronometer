class Chronometer {
  constructor() { //CONSTRUCTOR ANY PARAM
    this.currentTime = 0,
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(()=>{
      this.currentTime +=1
    },1000)
    if(this.currentTime === 60){
      callback()
    }
  
  }
  getMinutes() {
     return Math.floor(this.currentTime / 60)
   
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60)
    /* if (this.currentTime === 0){return 0} 
    const minutes = this.getMinutes()  // why this.getMinutes? why the this?
    return Math.floor(this.currentTime - minutes) */
  }
  twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
    clearInterval(()=>{
      this.intervalId = 0;
    })
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
  }
}
