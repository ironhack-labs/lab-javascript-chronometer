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
  }
  getSeconds() {
    return Math.floor(this.currentTime%60);
  }

  twoDigitsNumber(aNumber) {   
 if (aNumber<10){
return `0${aNumber}`;
  }else{
return `${aNumber}`;
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime=0;
  }

  splitClick() {     
   let min = this.chronometer.getMinutes();
     let sec = this.chronometer.getSeconds();
     if (min < 10) {
       return (`${0}${min}:${0}${sec}`);
     } else {
       return (`${min}:${sec}`);
     }
  }
}


