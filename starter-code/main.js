//Use setInterval to update the chronometer each second.
//Use Prototypal Inheritance to create a JavaScript object 
//that encapsulates all the Chronometer functionalities.
/*

You have to create a Chronometer object and add all 
the necessary methods through Prototypal Inheritance.

 that will contain our Chronometer object with the following methods:
startClick, that will be triggered when the left button is clicked while the
 chronometer is stopped. In this iteration, this methods has to:
Set the btnLeft button with the text STOP, and the class btn stop.
Set the btnRight button with the text SPLIT, and the class btn split.
stopClick, that will be triggered when the left button is clicked while the 
chronometer is running. In this iteration, this method has to:
Set the btnLeft button with the text START, and the class btn start.
Set the btnRight button with the text RESET, and the class btn reset.
In the main.js file, create a new instance of the Chronometer object.
Create the necessary code in the main.js to call the Chronometer startClick 
method if the button has the start class, or the stopClick method if the button has the stop class applied.
*/

var chrono = new Chronometer();

// Start/Stop Button
$("#btnLeft").on("click", function () {
  console.log("Left button clicked")

 
});

// Reset/Split Button
$("#btnRight").on("click", function () {
  console.log("Right button clicked");

 
});
