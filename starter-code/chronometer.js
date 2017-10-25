var startClick = document.getElementById('btnLeft');
var resetClick = document.getElementById('btnRight');
var firstNum = document.getElementById('minDec');
var currentTimer;

//START CLICK
startClick.onclick = function () {

var stop = document.querySelector('button');
var split = document.getElementById('btnRight');

  if (//need if statement) {

        stop.innerHTML = 'STOP';
        stop.setAttribute('class','btn stop');

        split.innerHTML = 'SPLIT';
        split.setAttribute('class','btn split');

  } else if (//need else statment) {
      stop.innerHTML = 'START';
      stop.setAttribute('class','btn start');

      split.innerHTML = 'RESET';
      split.setAttribute('class','btn reset');
    }
  };


/*
stopClick, that will be triggered when the left button is clicked while
the chronometer is running. In this iteration, this method has to:
  Set the btnLeft button with the text START, and the class btn start.
  Set the btnRight button with the text RESET, and the class btn reset.
*/
