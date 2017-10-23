window.onload = function() {
    //instancia de cronometro
    var chronometer = new Chronometer();

    // Start/Stop Button
    document.getElementById("btnLeft").addEventListener("click", function(event) {
        console.log("Left button clicked");
        console.log(event.currentTarget.classList.value);
        if (event.currentTarget.classList.value == "btn start") {
            chronometer.startClick();
        } else if (event.currentTarget.classList.value == "btn stop") {
            chronometer.stopClick();
        }
    });

    // Reset/Split Button
    document.getElementById("btnRight").addEventListener("click", function(event) {
        console.log("Right button clicked");
        if (event.currentTarget.classList.value == "btn split") {
            chronometer.splitClick();
        } else if (event.currentTarget.classList.value == "btn reset") {
            chronometer.resetClick();
        }
    });
}
