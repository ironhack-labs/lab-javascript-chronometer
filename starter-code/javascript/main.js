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
    // console.log(printSeconds([0]))
    minDec.innerHTML = printMinutes()[0]
    minUni.innerHTML = printMinutes()[1]
    secDec.innerHTML = printSeconds()[0]
    secUni.innerHTML = printSeconds()[1]
}

function printMinutes() {
    return chronometer.twoDigitsNumber(chronometer.getMinutes()) 
}

function printSeconds() {
    return chronometer.twoDigitsNumber(chronometer.getSeconds()) 
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {
    chronometer.startClick()
    return (setInterval (() => {
        printTime()
      },1000))
    
}

function setResetBtn() {
    chronometer.resetClick()
    printTime()
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

let stopCronoIntervalID
let startToStop = document.querySelector("#btnLeft")
let resetToSplit = document.querySelector("#btnRight")

if (startToStop.innerHTML == 'START') {
    
    startToStop.innerHTML = 'STOP'
    resetToSplit.innerHTML = 'SPLIT'
    resetToSplit.className = 'btn split'
    startToStop.className = 'btn stop'
    stopCronoIntervalID= setStartBtn()
}else  {
    startToStop.innerHTML = 'START'
    startToStop.className = 'btn start'
    resetToSplit.innerHTML = 'RESET'
    resetToSplit.className = 'btn reset'
    chronometer.stopClick()
    clearInterval(stopCronoIntervalID)
}

return console.log(startToStop)
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    let resetToSplit = document.querySelector("#btnRight")
    if(resetToSplit.innerHTML == 'RESET'){
        setResetBtn()
        let newSplits = document.querySelectorAll(".newSplits")
        for(let newSplit of newSplits){
            newSplit.remove()
        }
    }else{
        
        let splitItem = document.querySelector("#splits")
        // let splitFunction = chronometer.splitClick()

        let newLi = document.createElement("li")
        newLi.setAttribute("class","newSplits")
        newLi.innerText = chronometer.splitClick()
        splitItem.appendChild(newLi)
        
    


//         let quantityNode = createItemNode("div", "");
//   quantityNode.setAttribute("class", "col");

//   let quantSpan = createItemNode("span", "0");
//   quantSpan.setAttribute("class", "total");

//   let quantCoin = createItemNode("span", " €");

//   quantityNode.appendChild(quantSpan);
//   quantityNode.appendChild(quantCoin);

    }
   
});
