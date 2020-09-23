class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  
    // ... your code goes here
  }
  startClick(callback) {
    
    let intId = setInterval(()=>{
      this.currentTime +=1
    callback()
  },1000) 
  
  
    // ... your code goes here
  }
  getMinutes() {
    let minutes = 0
    let time=this.currentTime
    if (time>=60){
    minutes=time/60
    
    }
    return Math.floor(minutes)
    // ... your code goes here
  }
  
  getSeconds() {
    let seconds=this.currentTime
    
    return Math.floor(seconds%60)
    
    // ... your code goes here
  }
  twoDigitsNumber(time) {
    if(time<10){
      return (0+time.toString())
    }
    else return (time.toString())
   
    // ... your code goes here
  }
  stopClick() {
    clearInterval(this.intId)
    

    // ... your code goes here
  }
  resetClick() {
  this.currentTime=0
    // ... your code goes here
  }

  splitClick() {
    let splitSecs = this.twoDigitsNumber(this.getSeconds())
    let splitMins = this.twoDigitsNumber(this.getMinutes())

    return splitMins +":"+ splitSecs

 
    
  }
}
