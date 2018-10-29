var chronometer = {
  seconds: 0,
  minutes: 0,
  miliseconds: 0,
  intervalId: {},
  start: function() {
    chronometer.intervalId = setInterval(function(){
      chronometer.miliseconds++;
      if (chronometer.miliseconds===60) {
        chronometer.seconds++;
        chronometer.miliseconds=0;
      }
      if (chronometer.seconds===60) {
        chronometer.minutes++;
        chronometer.seconds=0;
      }
      update(chronometer.minutes, chronometer.seconds, chronometer.miliseconds);
    }, 10)
  },
  stop: function() {
    clearInterval(chronometer.intervalId)
  },
  reset: function() {
    chronometer.miliseconds=0;
    chronometer.seconds=0;
    chronometer.minutes=0;
    update(chronometer.minutes, chronometer.seconds, chronometer.miliseconds);
    var parent = document.getElementById('splits');
    parent.innerHTML="";
  }
}