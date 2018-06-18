var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {}

function printMinutes() {
	minDec = chronometer.twoDigitsNumber(chronometer.setSeconds)[1];
	minUni = chronometer.twoDigitsNumber(chronometer.setSeconds)[0];
}

function printSeconds() {
	secDec = chronometer.twoDigitsNumber(chronometer.setSeconds)[0];
}

function printMilliseconds() {
	secUni = chronometer.twoDigitsNumber(chronometer.setSeconds)[1];
}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
	if (btnLeft.innerText == "START") {
		btnLeft.innerText = "STOP";
		btnLeft.classList.remove("start");
		btnLeft.classList.add("stop");
		chronometer.startClick();
		setInterval(function() {
			minDec.innerText = chronometer.minutes[0];
			minUni.innerText = chronometer.minutes[1];
			secUni.innerText = chronometer.seconds[1];
            secDec.innerText = chronometer.seconds[0];
            milDec.innerText=chronometer.miliseconds[0];
            milUni.innerText=chronometer.miliseconds[1];
		}, 1);
	} else {
		btnLeft.innerText = "START";
		btnLeft.classList.remove("stop");
		btnLeft.classList.add("start");
		chronometer.stopClick();
	}
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
	if (btnRight.innerText == "SPLIT" && btnLeft.innerText == "STOP") {
		btnRight.innerText = "RESET";
		btnRight.classList.remove("split");
		btnRight.classList.add("reset");
		var lista = document.createElement("li");
		lista.classList.add("lista");
		var padre = document.getElementById("splits");
		var texto = document.createTextNode(
			" " +
				chronometer.minutes[0] +
				chronometer.minutes[1] +
				":" +
				chronometer.seconds[0] +
                chronometer.seconds[1] +
                ":" +
				chronometer.miliseconds[0] +
				chronometer.miliseconds[1] 
		);
		padre.appendChild(lista);
		lista.appendChild(texto);
	} else if (btnRight.innerText == "RESET" && btnLeft.innerText == "START") {
		btnRight.innerText = "SPLIT";
		btnRight.classList.remove("reset");
		btnRight.classList.add("split");
		var padre = document.getElementById("splits");
		var hijo = document.getElementsByClassName("lista");
		while (padre.hasChildNodes()) {
			padre.removeChild(padre.firstChild);
        }
        chronometer.splitClick();
		chronometer.resetClick();
		chronometer.stopClick();
		minDec.innerHTML = "0";
		minUni.innerHTML = "0";
		secDec.innerHTML = "0";
		secUni.innerHTML = "0";
	} else if (btnRight.innerText == "SPLIT" && btnLeft.innerText == "START") {
		btnRight.innerText = "RESET";
		btnRight.classList.remove("split");
		btnRight.classList.add("reset");
	} else {
		btnRight.innerText = "SPLIT";
		btnRight.classList.remove("reset");
		btnRight.classList.add("split");
	}
});
