
function Chronometer (seconds, minutes){
  this.seconds = seconds;
  this.minutes = minutes;
}

Chronometer.prototype.startClick = function (){
  console.log("esto vale mi objeto en Chronometer.js" );
  console.log(this)
  this.changeLeftButton();
  this.changeRightButton();
  this.startCount()
}

Chronometer.prototype.stopClick = function (){

}

Chronometer.prototype.changeLeftButton = function (){
  document.getElementById("btnLeft").className = "btn stop";
  document.getElementById("btnLeft").innerHTML = 'STOP';
}

Chronometer.prototype.changeRightButton = function (){
  document.getElementById("btnRight").className = "btn split";
  document.getElementById("btnRight").innerHTML = 'SPLIT';
}

Chronometer.prototype.startCount = function (){
  this.seconds = 0;
  var that = this;
  var contador = setInterval(function(){
    console.log(that.seconds);
    that.seconds++;
  }, 1000);
}





// get the class name of "element"

// var elements = document.getElementsByClassName("start");
// console.log(elements)
//
// function change(){
//   elements.className = "stop";
//
// }





// var start = element.className;
// otherElement.className = stop;
//
// var split= element.className;
// otherElement.className = reset;



// Chronometer.prototype.startClick.getElementById("btnLeft")
//
//
//
//
// function(START, RESET){
//   this.btnLeft: START;
//   this.btnRight: RESET;
// }
//
// var stopChrono= new Chronometer (){
//   Chronometer.call(this, STOP, SPLIT)
//
// }
//
// stopChrono.prototype= Object.create(Chronometer.prototype);
// stopChrono.prototype=stopChrono;
