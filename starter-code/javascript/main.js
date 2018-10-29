var chronometer = new Chronometer();

var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');




var domIntervalId;

function printTime() {

    printSeconds();
    printMinutes();
}

function printMinutes() {

  var minutes = chronometer.setMinutes(this.currentTime);
  document.querySelector('#minDec').innerHTML = chronometer.twoDigitsNumber(minutes)[0];
  document.querySelector('#minUni').innerHTML = chronometer.twoDigitsNumber(minutes)[1];

}

function printSeconds() {

  var seconds = chronometer.setSeconds(this.currentTime);

  document.querySelector('#secDec').innerHTML = chronometer.twoDigitsNumber(seconds)[0];
  document.querySelector('#secUni').innerHTML = chronometer.twoDigitsNumber(seconds)[1];

}

function printMilliseconds() {

}

function printSplit() {

var minutes = chronometer.setMinutes(this.currentTime);
var seconds = chronometer.setSeconds(this.currentTime);

var time = document.createTextNode(`${chronometer.twoDigitsNumber(minutes)}:${chronometer.twoDigitsNumber(seconds)}`);

var liTag = document.createElement('li');
var spanTag = document.createElement('span');

spanTag.appendChild(time);
liTag.appendChild(spanTag);

document.querySelector('#splits').appendChild(liTag);

}

function clearSplits() {

}

function setStopBtn(e) {

    chronometer.startClick();

    e.currentTarget.setAttribute('class', 'btn stop');
    e.currentTarget.innerHTML = 'STOP';

    setSplitBtn();
   
    domInterval = setInterval(function(){
        printTime();
    },1000);;

}

function setSplitBtn() {

    document.querySelector('#btnRight', '.btn', '.reset').innerHTML = 'SPLIT';
    document.querySelector('#btnRight', '.btn', '.reset').setAttribute('class', 'btn split');

}

function setStartBtn(e) {

    e.currentTarget.setAttribute('class', 'btn start');
    e.currentTarget.innerHTML = 'START';

    setResetBtn();

    chronometer.stopClick();
    clearInterval(domInterval);


}

function setResetBtn() {

    document.querySelector('#btnRight', '.btn', '.reset').innerHTML = 'RESET';
    document.querySelector('#btnRight', '.btn', '.reset').setAttribute('class', 'btn reset');
    

}

// Start/Stop Button
btnLeft.addEventListener('click', function (e) {

    if (e.currentTarget.innerHTML === 'START') {
        setStopBtn(e);
    } else {
        setStartBtn(e);
    }




});

// Reset/Split Button
btnRight.addEventListener('click', function (e) {

 

    if (e.currentTarget.innerHTML === 'RESET') {

    document.querySelector('#splits').innerHTML = '';
    chronometer.resetClick();

    document.querySelector('#minDec').innerHTML = '0';
    document.querySelector('#minUni').innerHTML = '0';

    document.querySelector('#secDec').innerHTML = '0';
    document.querySelector('#secUni').innerHTML = '0';

    } else {
        printSplit();
    }



});
