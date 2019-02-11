// Constructor

function Chronometer() {
  
  this.currentTime = 0
  this.intervalId = 0

}



Chronometer.prototype.startClick = function () {
  console.log("jhfhgf")
  var that = this

  this.intervalId = setInterval(function() {

    that.currentTime ++

    that.setTime()

    printMinutes()
    printSeconds()
    

  }, 1000)

  

};



Chronometer.prototype.setMinutes = function () {

  var minutes = parseInt(this.currentTime / 60)

    return minutes

};



Chronometer.prototype.setSeconds = function () {

  var seconds = this.currentTime % 60

  return seconds
  
};


Chronometer.prototype.twoDigitsNumber = function () {

 var str = this.currentTime

 if(str < 10) {
   return "0" + str
 } else {

   return str.toString()
 }

};


Chronometer.prototype.setTime = function (time) {

  return this.twoDigitsNumber(time)


};

// Chronometer.prototype.setMilliseconds = function () {

//   var miliSeconds = This.currentTime 

// };

Chronometer.prototype.stopClick = function () {

  clearInterval(this.intervalId)
  
};

Chronometer.prototype.resetClick = function () {

  this.currentTime = 0

};

// Chronometer.prototype.splitClick = function () {



// };
