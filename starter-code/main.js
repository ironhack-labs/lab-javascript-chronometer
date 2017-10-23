// Start/Stop Button

var buttonLeft = document.getElementById("btnLeft");

function Chron() {
  this.startPoint = 0;
  this.miliseconds=0;
  this.seconds=0;
  this.minutes=0;
  this.minutesTen=0;
}

Chron.prototype.startClick = function () {
  var that=this;
  interval= setInterval(function () {
    
    if(that.miliseconds === 9){
      that.miliseconds=-1;
      that.seconds++;
      document.getElementById("secDec").innerHTML = that.seconds;
    } 
    that.miliseconds++;
    if(that.seconds===5 && that.miliseconds===9){
          that.seconds=-1;
          that.miliseconds=-1;
          that.minutes++;
          that.seconds++
          that.miliseconds++
          document.getElementById("secDec").innerHTML = that.seconds;
          document.getElementById("minCen").innerHTML = that.minutes;
        }
    if(that.seconds===5 && that.miliseconds===9 && that.minutes===9){
       that.seconds=-1;
       that.miliseconds=-1;
       that.minutes=-1;
       that.minutesTen++
      that.minutes++;
      that.seconds++
      that.miliseconds++
      document.getElementById("minDec").innerHTML = that.minutesTen;
      document.getElementById("secDec").innerHTML = that.seconds;
      document.getElementById("minCen").innerHTML = that.minutes;
    }
    document.getElementById("secCen").innerHTML = that.miliseconds;
  }, 1000);
  //return interval;
};

/* THIS PART DOESN'T WORK AS WE WANTED: the clearInterval was supposed
to stop the setInterval.

Chron.prototype.stopClick = function(){
  chro.clearInterval(interval);
}

*/

var chro = new Chron();

document.getElementById("btnLeft").addEventListener("click", function () {
  buttonLeft.classList.remove("start");
  buttonLeft.className += " stop";
  buttonLeft.innerHTML = "STOP";
  chro.startClick();
  
});






// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  console.log("Right button clicked");
});