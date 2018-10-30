// Constructor

var chronometer = {
  seconds: 0,
  minutes: 0,
  miliseconds: 0,
  underTen: function(){
    if (chronometer.miliseconds < 10) {chronometer.miliseconds = String(this.miliseconds).padStart(2,"0");
    } 
    if  (chronometer.seconds < 10) {chronometer.seconds = String(this.seconds).padStart(2,"0");
    }
    if  (chronometer.minutes < 10) {chronometer.minutes = String(this.minutes).padStart(2,"0");}
  },
  run: function () {
    chronometer.underTen();
    if (chronometer.miliseconds == 99) {
          chronometer.seconds++;
          chronometer.miliseconds = 0;
      document.getElementById("")}
    else if (chronometer.seconds == 59){
      chronometer.minutes++;
      chronometer.seconds = 0;
    }
    else { chronometer.miliseconds++;
    };
      document.getElementById("actualMiliSeconds").innerHTML = chronometer.miliseconds;
      document.getElementById("seconds").innerHTML = chronometer.seconds;
      document.getElementById("minutes").innerHTML = chronometer.minutes;
    },
  split: function (){
    let li =  String(chronometer.minutes).padStart(2,"0") + ":" + String(chronometer.seconds).padStart(2,"0") + ":" + String(this.miliseconds).padStart(2,"0");
    let splitArray = document.getElementById("splits");
    splitArray.insertAdjacentHTML('beforeend', `<li>${li}</li>`);
    },
    reset: function (){ 
    document.getElementById("actualMiliSeconds").innerHTML = "00";
    chronometer.miliseconds = 0;
    document.getElementById("seconds").innerHTML = "00";
    chronometer.seconds = 0;
    document.getElementById("minutes").innerHTML = "00";
    chronometer.minutes = 0;
    document.getElementById("splits").innerHTML = "";

    },
  intervalRef: {},
    startStopwatch: function() {
      this.intervalRef = setInterval(this.run, 10);
    },
    stopStopwatch: function() {
      clearInterval(chronometer.intervalRef);
  }
};



