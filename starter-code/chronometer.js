var startClick = document.getElementById('btnLeft');
var resetClick = document.getElementById('btnRight');
var counter = document.getElementsByClassName('number');
var minNum1 = document.getElementById('minDec');
var minNum2 = document.getElementById('minCen');
var secNum1 = document.getElementById('secDec');
var secNum2 = document.getElementById('secCen');

// START CLICK (VISUAL)
startClick.onclick = function () {
  var stop = document.getElementById('btnLeft');
  var split = document.getElementById('btnRight');

  switch( stop.innerHTML ) {

     case "STOP":
        stop.innerHTML = 'START';
        stop.setAttribute('class','btn start');

        split.innerHTML = 'RESET';
        split.setAttribute('class','btn reset');
          break;

     case "START":
        stop.innerHTML = 'STOP';
        stop.setAttribute('class','btn stop');

        split.innerHTML = 'SPLIT';
        split.setAttribute('class','btn split');
          break;
      }
    };
