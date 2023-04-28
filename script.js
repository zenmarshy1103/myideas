// >> Ideas - A button that has the loader running when pressed
//  - hides and unhides CSS classes
//  - use of setInterval(function, timeofexecute) to run the function indefinitely in timeofexecute time
//  - use of clearInterval() to stop the timer id returned by setInterval()

"use strict";

// Method 3 - Creating HTML with JavaScript
// >> Creating the wifi button

// Creating:
const button = document.createElement("button");
const span = document.createElement("span");
const buttonText = document.createTextNode("wifi");
const spinnerDiv = document.createElement("div");
button.appendChild(span);
span.appendChild(buttonText);
button.appendChild(spinnerDiv);

button.setAttribute("type", "button");
button.classList.add("btn-size");
button.classList.add("btn-wifi");
span.setAttribute("class", "text--wifi");
spinnerDiv.setAttribute("class", "spinner--wifi hidden");

// >>Placing the created wifi button HTML tag and append it to the element as the child for the wifi-button-compnent class
const displayWifiButton = document.querySelector(".wifi-button-component");
const wifiButtonText = document.querySelector(".text--wifi");
displayWifiButton.appendChild(button);
const wifiButton = document.querySelector(".wifi-button-component");
const wifiSpinner = document.querySelector(".spinner--wifi");

let spinning = false; //A status variable to check if it is currently spinning or not spinning
let spinningAngle = 0; // Setting the initial deg to 0
let angleIncrement = 45;
let spinnerInterval; // initialising this to be used later to use for clearInterval() to stop the timmer by setInterval()

function showSpinnerText() {
  //Show the spinner text
  document.querySelector(".text--wifi").classList.remove("hidden");
  console.log(`Spinner Text Showing`);
}

function hideSpinnerText() {
  //Hide the spinner text
  document.querySelector(".text--wifi").classList.add("hidden");
  console.log(`Spinner Text Hidden`);
}

function showWifiSpinner() {
  //Show the wifi spinner
  wifiSpinner.classList.remove("hidden");
  console.log(`Spinner Showing`);
}

function hideWifiSpinner() {
  //Hide the wifi spinner
  wifiSpinner.classList.add("hidden");
  console.log(`Spinner Hidden`);
}

function toggleSpinner() {
  // Turning on and off of the wifi text and wifi spinner
  // spinningAngle = 0;
  if (!spinning) {
    //Check if nonSpinning status is false
    // TRUE: spins the wifi spinner and hide the wifi text
    hideSpinnerText();
    showWifiSpinner();
    spinning = true; //Let the status show it is spinning
    console.log(`Spinner spinning`);
    spinnerInterval = setInterval(function () {
      wifiSpinner.style.transform = `rotate(${(spinningAngle +=
        angleIncrement)}deg)`;
      console.log(spinningAngle);
    }, 1000);
  } else {
    // FALSE: Clears the last wifi spinner spinning degree and set it to zero and showing the wifi text and hide the wifi spinner
    showSpinnerText();
    hideWifiSpinner();
    spinning = false; //Let the status show it is not spinning
    console.log(`Spinner not spinning`);
    clearInterval(spinnerInterval);
    spinningAngle = 0; //Setting the spinningAngle back to 0, clearing the last angle used.
    wifiSpinner.style.transform = `rotate(${spinningAngle}deg)`; //Setting the wifispinner to 0deg rotation position
  }
}

wifiButton.addEventListener("click", toggleSpinner);
