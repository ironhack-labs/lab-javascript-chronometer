var Chronometer = function() {
  this.isRunning = false;
  this.counter = 0;
};

// Chronometer.prototype.checkCounting = function() {
//   var self = this;
//   if(this.isRunning) {
//     var intervalId = setInterval (function(){
//       self.counter ++;
//       console.log(self.counter);
//     }, 1000);
//   } else {
//     clearInterval(intervalId);
//   }
// };

// Chronometer.prototype.stopCounting = function() {
//   clearInterval(intervalId);
// };
// Chronometer.prototype.keepGoing = function() {
//   this.counter ++;
// };

Chronometer.prototype.startClick = function() {
  console.log("ejecutando startClick");
  this.changeButtons();
  // this.checkCounting();
};

Chronometer.prototype.stopClick = function() {
  this.changeButtons();
  // this.checkCounting();
};

Chronometer.prototype.changeButtons = function (){
  if(this.isRunning) {
    clearInterval(intervalId);
    this.isRunning = false;
    btnLeft.classList.toggle("stop");
    btnLeft.innerHTML = "START";
    btnRight.classList.toggle("split");
    btnRight.innerHTML = "RESET";


    console.log("Is running:" + this.isRunning);


  } else {
    var self = this;
    var intervalId = setInterval (function(){
      self.counter ++;
      console.log(self.counter);
    }, 1000);
    console.log("Start counting");
    this.isRunning = true;
    btnLeft.classList.toggle("stop");
    btnLeft.innerHTML = "STOP";


    console.log("Is running:" + this.isRunning);
  };
};

// Chronometer.prototype.resetClick = function() {
//   if(this.isRunning) {
//     this.isRunning = false;
//     btnRight.classList.toggle("split");
//     btnRight.innerHTML = "RESET";
//
//   } else {
//     this.isRunning = true;
//     btnLeft.classList.toggle("stop");
//     btnLeft.innerHTML = "STOP";
//     btnRight.classList.toggle("split");
//     btnRight.innerHTML = "SPLIT";
//   };
// };



var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
