class Chronometer {

  
  constructor() {
    this.currentTime=0;
    this.intervalId=0;  }

  startClick() 
{
   this.intervalID = setInterval(()=>  {
      this.currentTime++;
    },1000)


  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
    // ... your code goes here
  }
  getSeconds() {
    return Math.floor(this.currentTime%60);
    // ... your code goes here
  }

  twoDigitsNumber(aNumber) {
    
 if (aNumber<10){
return `0${aNumber}`;
  }else{
return `${aNumber}`;
    }


    // ... your code goes here
  }
  stopClick() {
    clearInterval(this.intervalId)
    // ... your code goes here
  }
  resetClick() {
    this.currentTime=0;
    // ... your code goes here
  }
  splitClick() {

//return;

     
   let min = this.chronometer.getMinutes();
     let sec = this.chronometer.getSeconds();
     if (min < 10) {
       return (`${0}${min}:${0}${sec}`);
     } else {
       return (`${min}:${sec}`);
     }
     // ... your code goes here
  }
}


