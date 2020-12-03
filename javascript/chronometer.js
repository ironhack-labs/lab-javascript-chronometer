class Chronometer {
  constructor() {
    // ... your code goes here
   this.currentTime = 0;
    this.intervalId= 0;
  }
  startClick(calback) {
     // ... your code goes here
  this.intervalId = setInterval(()=>{
      this.currentTime++
    },1000);

   
   
  }
  getMinutes() {
    
    return Math.floor(this.currentTime/60)
 // ... your code goes here
}
  getSeconds() {
    return this.currentTime %60
    // ... your code goes here
  }
  twoDigitsNumber(number) {
    if(number<10){
      return `0${number}`
    }
    else{
      return number;
    }
    // ... your code goes here
  }
  stopClick() {
   clearInterval(this.intervalId)

    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0;
    // ... your code goes here
  }
    splitClick(min,sec) {
     min =this.getMinutes();
     sec =this.getSeconds();
    
    if(min<10 && sec <10 ){
      return `0${min}:0${sec}`
    }
    else if(min < 10 && sec>10){
      return `0${min}:${sec}`
    }
    else if(min>10 && sec <10){
      return `${min}:0${sec}`
    
    }else{
      return `${min}:${sec}`
    }

    // ... your code goes here
  }
}


