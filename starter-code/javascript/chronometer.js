class Chronometer {
  constructor() {
   
    this.currentTime = 0;
    this.intervalId;
  }

 

   startClick() {
     this.intervalId = setInterval(() => {
       this.currentTime++
    }, 1000);
   }

   getMinutes() {
    return +Math.floor(this.currentTime / 60);
   }

   getSeconds() {
    return +Math.round(this.currentTime % 60)
   }

   twoDigitsNumber(number) {

    let resultNumber = number.toString();

    if(resultNumber.length <= 1){
      return resultNumber = 0 + resultNumber;
    }
    return resultNumber
   }

   resetClick() {
    return this.currentTime = 0
   }

   stopClick() {
    clearInterval(this.intervalId);
   }

  // splitClick() {}
}

