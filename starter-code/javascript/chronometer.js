var chronometer = {
  seconds: 0,
  minutes: 0,
  milliseconds: 0,
  underTen: function() {
    if (chronometer.milliseconds < 10) {chronometer.milliseconds = String(this.milliseconds).padStart(2,"0");
    }
    if (chronometer.seconds < 10) {chronometer.seconds = String(this.seconds).padStart(2,"0"); 
    }
    if (chronometer.minutes < 10) {chronometer.minutes = String(this.minutes).padStart(2,"0");}
  },

  run: function () {
    chronometer.underTen();
    if (chronometer.milliseconds == 99) {
          chronometer.seconds++;
          chronometer.milliseconds = 0;
      document.getElementById("")}
    else if (chronometer.seconds == 59){
      chronometer.minutes++;
      chronometer.seconds = 0;
    }
    else { chronometer.milliseconds++;
    };
    document.getElementById("actualMilliseconds").innerHTML = chronometer.milliseconds;
    document.getElementById("seconds").innerHTML = chronometer.seconds;
    document.getElementById("minutes").innerHTML = chronometer.minutes;
  },

  split: function (){
    let li =  String(chronometer.minutes).padStart(2,"0") + ":" + String(chronometer.seconds).padStart(2,"0") + ":" + String(this.milliseconds).padStart(2,"0");
    let splitArray = document.getElementById("splits");
    splitArray.insertAdjacentHTML("beforeend", `<li>${li}</li>`);
  },
  
  reset: function (){ 
    document.getElementById("actualMilliseconds").innerHTML = "00";
    chronometer.milliseconds = 0;
    document.getElementById("seconds").innerHTML = "00";
    chronometer.seconds = 0;
    document.getElementById("minutes").innerHTML = "00";
    chronometer.minutes = 0;
    document.getElementById("splits").innerHTML = "";
  },

  intervalRef: {},
    startStopWatch: function() {
      this.intervalRef = setInterval(this.run, 10);
    },
    stopStopWatch: function() {
      clearInterval(chronometer.intervalRef);
  }
};
























