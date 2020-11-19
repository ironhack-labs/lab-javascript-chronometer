class Chronometer {

  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.timeCent = 0;
    this.intervalId;
  }



  startClick() {

    // console.log("start it");
    // console.log(this.currentTime);

    this.intervalId = setInterval(() => {
    this.currentTime ++;
      // this.getMinutes();       
      // console.log("start click this time",this.currentTime);
      // if (cb != undefined){
      //      cb(this.currentTime);
      
    }, 1000);

 }


  getMinutes() {

    //  console.log("get minutes minutes");
     console.log(Math.floor(this.currentTime/60));
     return Math.floor(this.currentTime/60);
     
  }


  getSeconds() {
    // ... your code goes here
    
    let minutes =  Math.floor(this.currentTime/60);
    let seconds = this.currentTime - minutes*60;
    console.log(typeof seconds);

    return seconds;

  }


  

  twoDigitsNumber(number) {
    // ... your code goes here

    let formattedNumber = (number<10 ? ("0" + number.toString()) : number)
    return formattedNumber.toString();

  }


  stopClick() {
    // ... your code goes here
    console.log("stop it");
    clearInterval(this.intervalId);

  }

  resetClick() {
    // ... your code goes here
    this.currentTime = 0;

  }

  splitClick() {
    // ... your code goes here
    let mins = this.twoDigitsNumber(this.getMinutes(this.time));
    let secs = this.twoDigitsNumber(this.getSeconds(this.time));
    return mins, secs;

  }
}



// var titi = new  Chronometer();

// titi.startClick();


// console.log(titi.twoDigitsNumber(8));
// console.log(titi.twoDigitsNumber("8"));
// titi.getSeconds();

// // console.log(titi.twoDigitsNumber(55));
// // titi.twoDigitsNumber(titi.getMinutes(titi.startClick));
// // titi.startClick(titi.getSeconds);

// setTimeout(function(){
//   titi.stopClick();
//   console.log(titi.getMinutes())
// }, 10000);





