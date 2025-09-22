//your JS code here. If required.
// Find the element with id "level"
const targetElement = document.getElementById("level");

let level = 0;
let currentElement = targetElement;

// Traverse up the DOM tree until reaching the root <html> element
while (currentElement) {
  level++;
  currentElement = currentElement.parentElement;
}

// Display the result using alert
alert("The level of the element is: " + level);
