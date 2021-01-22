// Describe: numberInput(number)
// Test: If any number contains a 1 it is returned with the word "Beep!"
// Expect: 

// let 1 === true


$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();


  function number(number) {
    const userInput = document.getElementById("number");
    if (userInput.includes(number(1))) {
      return number + "Beep!"
    }
    

    }
  });
});

console.log(number("10, Beep!"))