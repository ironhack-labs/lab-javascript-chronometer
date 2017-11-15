function Chronometer(){

}
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");

Chronometer.prototype.startClick = function () {
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP";
  btnRight.className = "btn split";
  btnRight.innerHTML = "SPLIT";
  this.startCounter();
};

Chronometer.prototype.stopClick = function () {
  btnLeft.className = "btn start";
  btnLeft.innerHTML = "START";
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";
  this.stopCounter();
};

Chronometer.prototype.startCounter = function () {
  this.interval = setInterval(callback, 1000);
};


Chronometer.prototype.stopCounter = function () {
  clearInterval(this.interval);
};

/////////////////////////////////////////////////////////////////////
//split
//////////////////////////////////////////////////////////////

Chronometer.prototype.splitClick = function () {
  this.splitTime();
};

Chronometer.prototype.splitTime = function (){
  var timeList = document.createElement("LI");
  var timeToSplit = document.createTextNode(actualTime);
  // var actualTime = document.getElementsByTagName("span").innerHTML;
  timeList.appendChild(timeToSplit);
  document.getElementById("split-list").appendChild(timeList);

};

/////////////////////////////////////////////////////////////////////
//reset
////////////////////////////////////////////////////////////////

Chronometer.prototype.resetClick = function (){
  this.resetTime();
  this.restartScreen();
  this.deleteSplitTime();
};

Chronometer.prototype.restartScreen = function (){
  document.getElementsByTagName("span")[0].innerHTML = "0";
  document.getElementsByTagName("span")[1].innerHTML = "0";
  document.getElementsByTagName("span")[3].innerHTML = "0";
  document.getElementsByTagName("span")[4].innerHTML = "0";
};

Chronometer.prototype.deleteSplitTime = function(){
var timeListDelete = document.getElementById("split-container");
var timeToSplitDelete = document.getElementsByTagName("li");
timeListDelete.removeChild(timeToSplitDelete);//error: timeListDelete.removeChild is not a function
};

//
// removeElements(document.querySelectorAll('#tbhold tr'));

Chronometer.prototype.resetTime = function (){
  counter = 1;
  console.log (actualTime);
};

////////////////////////////////////////////////////////////////////
//Chronometer
//////////////////////////////////////////////////

var minutes = 0;
var counter = 1;
var actualTime = 0;

function callback(){
  var seconds = counter % 60;
  if (seconds === 0){
    minutes++;
  }
    var formatedTime = timeToString(minutes, seconds);
    showTime(formatedTime);
    counter++;
    actualTime = formatedTime;
    }


function timeToString(minutes, seconds){
  return ([minutes, seconds].map(function (timeUnit){
    if(timeUnit < 10){
      return "0" + timeUnit;
    } else {
      return timeUnit.toString();
    }
  })
);
}

function showTime(formatedTime){
  var span = document.getElementsByTagName("span");
  var timeToFront = formatedTime.reduce(function (a, b) { return a + ':' + b ;}).split("");
  timeToFront.forEach(function(timeUnit, i){
    if (i !== 2){
      span[i].innerHTML = timeUnit;

    }
  });

}
