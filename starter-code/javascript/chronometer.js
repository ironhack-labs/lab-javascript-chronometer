// Constructor
// function Chronometer() {

// }

// Chronometer.prototype.startClick = function () {

// };

// Chronometer.prototype.setMinutes = function () {
  
// };

// Chronometer.prototype.setSeconds = function () {
  
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };

  var myWatch = {
    time: "",
    centisec: 0,
    seconds: 0,
    minutes: 0,
    getDec: function(num) {
      if (num < 10) {
        Dec = "0"
      } else {
        Dec = Math.floor(num/10)
      }
      return Dec
    },
    getUni: function(num) {
      if (num < 10) {
        Uni = num
      } else {
        Uni = num%10
      }
      return Uni
    },
    runWatch: function () {
      if (myWatch.centisec == 99 && myWatch.seconds == 59) {
          myWatch.minutes +=1;
          myWatch.seconds = 0;
          myWatch.centisec = 0;
      } else if (myWatch.centisec == 99 && myWatch.seconds < 59) {
          myWatch.seconds +=1;
          myWatch.centisec = 0;
      } else {
        myWatch.centisec +=1;
      }
      document.getElementById("minUni").innerHTML = myWatch.getUni(myWatch.minutes);
      document.getElementById("minDec").innerHTML = myWatch.getDec(myWatch.minutes);
      document.getElementById("secUni").innerHTML = myWatch.getUni(myWatch.seconds);
      document.getElementById("secDec").innerHTML = myWatch.getDec(myWatch.seconds);
      document.getElementById("milUni").innerHTML = myWatch.getUni(myWatch.centisec);
      document.getElementById("milDec").innerHTML = myWatch.getDec(myWatch.centisec);
      console.log(myWatch.minutes + ":" + myWatch.seconds + ":" + myWatch.centisec)
    },
    reference: {},
    start: function () {
    myWatch.reference = setInterval(myWatch.runWatch, 10)
    },
    stop: function (){
      clearInterval(myWatch.reference)
    },
    splits: function (){
      myWatch.time = myWatch.getDec(myWatch.minutes)+myWatch.getUni(myWatch.minutes)+":"+myWatch.getDec(myWatch.seconds)+myWatch.getUni(myWatch.seconds)+":"+myWatch.getDec(myWatch.centisec)+myWatch.getUni(myWatch.centisec)
      var newLi = document.createElement("li")
      newLi.innerHTML = myWatch.time
      document.getElementById("splits").appendChild(newLi)
    },
    reset: function () {
      this.seconds = 0;
      this.minutes = 0;
      this.centisec = 0;
      document.getElementById("minDec").innerHTML = 0;
      document.getElementById("minUni").innerHTML = 0;
      document.getElementById("secDec").innerHTML = 0;
      document.getElementById("secUni").innerHTML = 0;
      document.getElementById("milDec").innerHTML = 0;
      document.getElementById("milUni").innerHTML = 0;
      var ol = document.getElementById("splits");
      while(ol.firstChild) ol.removeChild(ol.firstChild);
    },
    }
  

    // function printTime () {
    //   // var currentMin = document.getElementById("minUni").innerHTML;
    //   // var currentSec = document.getElementById("secUni").innerHTML;
    //   // var currentCentisec = document.getElementById("milUni").innerHTML;

    //   document.getElementById("secUni") = 1;
      //currentMin = setInterval(myWatch.runWatch, 60000)
      //currentSec = setInterval(myWatch.runWatch, 1000)
      //currentCentisec = setInterval(myWatch.runWatch, 1000)

    // }




