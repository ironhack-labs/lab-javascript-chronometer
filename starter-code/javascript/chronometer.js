 //Constructor
 function Chronometer() {
  this.currentTime = 0
  this.intervalId = 0
 }

 Chronometer.prototype.startClick = function () {
 this.intervalId = setInterval(function(){ 
   this.currentTime++;
  //  console.log(this.currentTime);
   this.setTime();
   printTime()  
 }.bind(this) ,1000) 

 };



 Chronometer.prototype.setMinutes = function () {
  //var count = 0;
    // setInterval(function(){
    //   count++;
    //   this.currentTime = count;
    //   console.log(parseInt(this.currentTime / 60));
    // }.bind(this) ,1000) 
    return parseInt(this.currentTime / 60);
  };

 


 Chronometer.prototype.setSeconds = function () {
  // var count = 0;
  //   setInterval(function(){
  //     count++;
  //     this.currentTime = count;
  //     console.log(newChrono.twoDigitsNumber(this.currentTime % 60) );
  //   }.bind(this) ,100) 
  return (this.currentTime % 60);
 };

 Chronometer.prototype.twoDigitsNumber = function (num) {

 if (num <= 9) {
   return "0" + num.toString();
 } else if (num < 60) {
   return num.toString();
 } else {
   return "xx";
 }
 };

 Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var second = this.twoDigitsNumber(this.setSeconds());
  

 };

// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
 };

 Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  clearSplits();
  printTime();
 };

Chronometer.prototype.splitClick = function () {
  printSplit();
};



// var newChrono = new Chronometer;

// function btnLeftClick() {
//   if (newChrono.intervalId === 0) {
//      newChrono.startClick();
//   } else {
//     newChrono.stopClick();
//     newChrono.intervalId = 0;
//   }
// }

// function btnRightClick() {
//   newChrono.resetClick();
// }


