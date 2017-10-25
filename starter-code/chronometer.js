// Change left button when clicked
var startClick = document.getElementById('btnLeft');

startClick.onclick = function () {
  switch (document.getElementById('btnLeft').className) {
    case 'btn start':
    document.getElementById('btnLeft').className = 'btn stop';
    document.getElementById('btnLeft').innerHTML = 'STOP';
    break;
    default:
    document.getElementById('btnLeft').className = 'btn start';
    document.getElementById('btnLeft').innerHTML = 'START';
    break;
  }
  switch (document.getElementById('btnRight').className) {
    case 'btn reset':
    document.getElementById('btnRight').className = 'btn split';
    document.getElementById('btnRight').innerHTML = 'SPLIT';
    break;
    default:
    document.getElementById('btnRight').className = 'btn reset';
    document.getElementById('btnRight').innerHTML = 'RESET';
    break;
  }

  function add() {
      secCenTimer++;
      if (secCenTimer >= 9) {
          cenSeconds++;
          secDecTimer.innerHTML = cenSeconds;
          if (secDecTimer >= 9) {
              decSeconds++;
              minCenTimer.innerHTML = decSeconds;
              if (minCenTimer >= 9) {
                  cenMinutes++;
                  minDecTimer.innerHTML = cenMinutes;
              }
          }
      }
  }
};

var secCenTimer = document.querySelector('#secCen').innerHTML;
var secDecTimer = document.querySelector('#secDec').innerHTML;
var minCenTimer = document.querySelector('#minCen').innerHTML;
var minDecTimer = document.querySelector('#minDec').innerHTML;

var cenSeconds = 0;
var decSeconds = 0;
var cenMinutes = 0;
var decMinutes = 0;




//
// setInterval(
//   function () {
//     var countupNumber = 0;
//     countupNumber += 1;
//     secCenTimer.innerHTML = countupNumber;
//       if (countupNumber <= 0) {
//         clearInterval(intervalId);
//       }
//   },
//   10000
// );
//
// console.log(setInterval);
