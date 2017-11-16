var Chronometer = {
  startClick: function() {
    var leftbtn = document.getElementsByClassName("btn")[0];
    var rightbtn = document.getElementsByClassName("btn")[1];
      leftbtn.setAttribute("class","btn stop");
      leftbtn.innerHTML = "STOP";
      rightbtn.setAttribute("class","btn split");
      rightbtn.innerHTML = "SPLIT";
  },

  stopClick: function () {
    var leftbtn = document.getElementsByClassName("btn")[0];
    var rightbtn = document.getElementsByClassName("btn")[1];
      leftbtn.setAttribute("class","btn start");
      leftbtn.innerHTML = "START";
      rightbtn.setAttribute("class","btn reset");
      rightbtn.innerHTML = "RESET";
  }
};


var seconds = 0;
var seconds2 = 0;
var mints = 0;
var mints2 = 0;

var startchron = 0;


function chronometer() {
      timer = setTimeout(chronometer, 1000);

      if (startchron == 0) {
        clearInterval(timer);
      }

      if (startchron == 1) {
        seconds += 1;
      }

      if(seconds > 9) {
        seconds = 0;
        seconds2 += 1;
      }

      if(seconds2 > 5) {
        seconds2 = 0;
        seconds = 0;
        mints += 1;
      }

      if(mints > 5) {
        seconds2 = 0;
        seconds = 0;
        mints = 0;
        mints2 += 1;
      }


        document.getElementById('secCen').innerHTML = seconds;
        document.getElementById('secDec').innerHTML = seconds2;
        document.getElementById('minCen').innerHTML = mints;
        document.getElementById('minDec').innerHTML = mints2;
      }



function startChronometer () {
  startchron = 1;
  chronometer();
}

function stopChronometer () {
  startchron = 0;
}
