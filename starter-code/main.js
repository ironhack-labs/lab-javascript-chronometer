// Start/Stop Button
var startBtn = document.getElementById("btnLeft");
var intervalId;
startBtn.addEventListener("click", function () {
  intervalId =
  setInterval(function() {
    var seconds = document.querySelector('#secCen');
    var toNum = parseInt(seconds.innerHTML);
    var increaseTimer = toNum += 1;
    seconds.innerHTML = increaseTimer;


    var secondsDec = document.querySelector('#secDec');
    if (seconds.innerHTML > 9 ){
      seconds.innerHTML = 0;


      var toNumDec = parseInt(secondsDec.innerHTML);
      var increaseTimerDec = toNumDec += 1;
      secondsDec.innerHTML = increaseTimerDec;

    }


    var minCen = document.querySelector('#minCen');
    if (secondsDec.innerHTML > 5) {
      secondsDec.innerHTML = 0;
      var toNumMin = parseInt(minCen.innerHTML);
      var increaseTimerMin = toNumMin += 1;
      minCen.innerHTML = increaseTimerMin;
    }

    var minDec = document.querySelector('#minDec');
    if ( minCen.innerHTML > 9 ) {
      minCen.innerHTML = 0;
      var toNumMinDec = parseInt(minDec.innerHTML);
      var increaseTimerMinDec = toNumMinDec += 1;
      minDec.innerHTML = increaseTimerMinDec;
    }

      startBtn.innerHTML = 'STOP';

      if (startBtn.innerHTML === 'STOP') {
        startBtn.classList.remove('start');
        startBtn.classList.add('stop');

        startBtn.addEventListener("click", function () {
          clearInterval(intervalId);
        });
      }

    console.log(increaseTimer);
  },
  1000
);
});



// Reset/Split Button
var resetBtn = document.getElementById("btnRight");

// gives reset functionality
resetBtn.addEventListener("click", function () {
  var seconds = document.querySelector('#secCen');
  var seconds2 = document.querySelector('#secDec');
  var minutes = document.querySelector('#minCen');
  var minutes2 = document.querySelector('#minDec');
      clearInterval(intervalId);
  if (resetBtn) {
    seconds.innerHTML = 0;
    seconds2.innerHTML = 0;
    minutes.innerHTML = 0;
    minutes2.innerHTML = 0;
  }
  startBtn.innerHTML = 'START';
  startBtn.classList.remove('stop');
  startBtn.classList.add('start');

  // reused to add function to start after reset.
  startBtn.addEventListener("click", function () {
    intervalId =
    setInterval(function() {
      var seconds = document.querySelector('#secCen');
      var toNum = parseInt(seconds.innerHTML);
      var increaseTimer = toNum += 1;
      seconds.innerHTML = increaseTimer;


      var secondsDec = document.querySelector('#secDec');
      if (seconds.innerHTML > 9 ){
        seconds.innerHTML = 0;


        var toNumDec = parseInt(secondsDec.innerHTML);
        var increaseTimerDec = toNumDec += 1;
        secondsDec.innerHTML = increaseTimerDec;

      }


      var minCen = document.querySelector('#minCen');
      if (secondsDec.innerHTML > 5) {
        secondsDec.innerHTML = 0;
        var toNumMin = parseInt(minCen.innerHTML);
        var increaseTimerMin = toNumMin += 1;
        minCen.innerHTML = increaseTimerMin;
      }

      var minDec = document.querySelector('#minDec');
      if ( minCen.innerHTML > 9 ) {
        minCen.innerHTML = 0;
        var toNumMinDec = parseInt(minDec.innerHTML);
        var increaseTimerMinDec = toNumMinDec += 1;
        minDec.innerHTML = increaseTimerMinDec;
      }

        startBtn.innerHTML = 'STOP';

        if (startBtn.innerHTML === 'STOP') {
          startBtn.classList.remove('start');
          startBtn.classList.add('stop');

          startBtn.addEventListener("click", function () {
            clearInterval(intervalId);
          });
        }

      console.log(increaseTimer);
    },
    1000
  );
  });



});
