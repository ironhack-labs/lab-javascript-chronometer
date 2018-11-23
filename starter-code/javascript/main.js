var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');




// Start/Stop Button
btnLeft.addEventListener('click', function () {
    this.classList.add('stop');
    btnRight.classList.add('split');
    if(btnLeft.innerHTML === 'START'){
        btnLeft.innerHTML = 'STOP';
        btnRight.innerHTML = 'SPLIT';
    }else{
        this.classList.remove('split');
        btnRight.classList.remove('stop');
        btnLeft.innerHTML = 'START';
        btnRight.innerHTML = 'RESET';


    }

});

