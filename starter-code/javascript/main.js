var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

function printTime() {
    printMinutes()
    printSeconds()

}

function printMinutes() {
    setInterval(() => {
        minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
        minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
    },6000)
}

//PORQUE PTM SON 6000 EN LUGAR DE 60000????????????????????????

function printSeconds() {
    setInterval(() => {
        secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
        secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
    },1000);
}

function clearSplits() {
    let olElement = document.getElementById('splits')
    olElement.innerHTML = ""
}

function setSplitBtn() {
    let olElement = document.getElementById('splits')
    let liElement = document.createElement('li')
    olElement.appendChild(liElement)
    let itemElement = document.createTextNode(`${minDec.innerHTML}`+`${minUni.innerHTML}` + ` : ` +`${secDec.innerHTML}`+`${secUni.innerHTML}`)
    liElement.appendChild(itemElement)
}

function setResetBtn() {
    chronometer.resetClick()
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

    if(btnLeft.innerHTML === 'START'){
        btnLeft.innerHTML = 'STOP'
        btnLeft.classList.remove('start')
        btnLeft.classList.add('stop')

        btnRight.innerHTML = 'SPLIT'
        btnRight.classList.remove('reset')
        btnRight.classList.add('split')

        chronometer.startClick()
        printTime()

    } else {
        btnLeft.innerHTML = 'START'
        btnLeft.classList.remove('stop')
        btnLeft.classList.add('start')

        btnRight.innerHTML = 'RESET'
        btnRight.classList.remove('split')
        btnRight.classList.add('reset')

        chronometer.stopClick()

    }

});


// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerHTML === 'RESET'){
        setResetBtn()
        clearSplits()
    } else if(btnRight.innerHTML === 'SPLIT'){
        setSplitBtn()
    }
    

});

// if(btnLeft.innerHTML === 'RESET'){
    //     btnRight.innerHTML = 'SPLIT'
    //     btnRight.classList.remove('reset')
    //     btnRight.classList.add('split')

    // } else {
    //     btnRight.innerHTML = 'RESET'
    //     btnRight.classList.remove('split')
    //     btnRight.classList.add('reset')
    // }
