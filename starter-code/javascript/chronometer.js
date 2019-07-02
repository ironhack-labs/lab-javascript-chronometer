
class Chronometer {

  constructor() {

  this.currentTime = 0;
  this.intervalID = "";
  this.minutes = 0;
  this.seconds = 0;
  this.milliSeconds = 0;
  this.twoDigitsMin = [];
  this.twoDigitsSec = [];
  this.twoDigitsMilliSeconds = [];
  };

    startClick() {

      this.intervalID = setInterval(() => {

        this.currentTime++
        this.twoDigitsNumber();

        document.getElementById("milDec").innerHTML = this.twoDigitsMilliSeconds[0];
        document.getElementById("milUni").innerHTML = this.twoDigitsMilliSeconds[1];

        document.getElementById("secDec").innerHTML = this.twoDigitsSec[0];
        document.getElementById("secUni").innerHTML = this.twoDigitsSec[1];

        document.getElementById("minDec").innerHTML = this.twoDigitsMin[0];
        document.getElementById("minUni").innerHTML = this.twoDigitsMin[1];
      }, 10);
    }

    getMinutes() {
       this.minutes = Math.floor((this.currentTime)/6000);
      //  console.log(this.minutes);
    }

    getSeconds() {
      this.seconds = Math.floor((this.currentTime/100) % 60);
      // console.log(this.seconds);
    }

    getMilliSeconds(){
      this.milliSeconds = this.currentTime % 100;
      // console.log(this.milliSeconds);
    }

    twoDigitsNumber() {
      
      this.getSeconds();
      this.getMinutes();
      this.getMilliSeconds();

      let digitSecRight = 0;
      let digitSecLeft = 0; 
      let digitMinRight = 0;
      let digitMinLeft = 0; 
      let digitMilliSecRight = 0;
      let digitMilliSecLeft = 0;

      digitSecRight = this.seconds % 10;
      digitSecLeft = Math.floor(this.seconds/10);

      digitMinRight = this.minutes % 10;
      digitMinLeft = Math.floor(this.minutes/10);

      digitMilliSecRight = this.milliSeconds % 10;
      digitMilliSecLeft = Math.floor(this.milliSeconds/10);

      this.twoDigitsMin = [digitMinLeft, digitMinRight];
      this.twoDigitsSec = [digitSecLeft, digitSecRight];
      this.twoDigitsMilliSeconds = [digitMilliSecLeft, digitMilliSecRight];

      // console.log(this.twoDigitsMin);
      // console.log(this.twoDigitsSec);
      // console.log(this.twoDigitsMilliSeconds);
    }

    stopClick() {
      clearInterval(this.intervalID);
    }

    resetClick() {

      clearInterval(this.intervalID);
      this.currentTime = 0;

      document.getElementById("milDec").innerHTML = 0;
      document.getElementById("milUni").innerHTML = 0;

      document.getElementById("secDec").innerHTML = 0;
      document.getElementById("secUni").innerHTML = 0;

      document.getElementById("minDec").innerHTML = 0;
      document.getElementById("minUni").innerHTML = 0;
  }
    
    splitClick() {

      let printMin = `${this.twoDigitsMin[0]}${this.twoDigitsMin[1]}`;
      let printSec = `${this.twoDigitsSec[0]}${this.twoDigitsSec[1]}`;
      let printMilSec = `${this.twoDigitsMilliSeconds[0]}${this.twoDigitsMilliSeconds[1]}`;
     
      let printTime = printMin + ":" + printSec + ":" + printMilSec;

      var splitContainer = document.createElement("li")
      var splitContent = printTime;

      splitContainer.innerHTML = splitContent;

      document.getElementById("splits").appendChild(splitContainer);
    }

}
















// class Chronometer {

//   constructor() {

//   this.currentTime = 0;
//   this.intervalID = "";
//   this.minutes = 0;
//   this.seconds = 0;
//   this.twoDigitsMin = [];
//   this.twoDigitsSec = [];
//   };

//     startClick() {
//       this.intervalID = setInterval(() => console.log(this.currentTime++), 1000);
//     }

//     getMinutes() {
//        this.minutes = Math.floor(this.currentTime/60);
//        console.log(this.minutes);
//     }

//     getSeconds() {
//       this.seconds = this.currentTime%60;
//     }

//     twoDigitsNumber() {
      
//       this.getSeconds();
//       this.getMinutes();

//       let digitSecRight = 0;
//       let digitSecLeft = 0; 
//       let digitMinRight = 0;
//       let digitMinLeft = 0; 

//       digitSecRight = this.seconds % 10;
//       digitSecLeft = Math.floor(this.seconds/10);
//       digitMinRight = this.minutes % 10;
//       digitMinLeft = Math.floor(this.minutes/10);

//       this.twoDigitsSec = [digitSecLeft, digitSecRight];
//       this.twoDigitsMin = [digitMinLeft, digitMinRight];

//       console.log(this.twoDigitsSec);
//       console.log(this.twoDigitsMin);
//     }

//     stopClick() {
//       clearInterval(this.intervalID);
//     }

//     resetClick() {
//       clearInterval(this.intervalID);
//       this.currentTime = 0;
//     }
    
//     splitClick() {

//     }

// }


// var chronoOne = new Chronometer();

// chronoOne.getMinutes()