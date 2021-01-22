// Describe: userInputArray(numbers)
// Test: If any number inputted by user contains a 1 it is returned with the word "Beep!"
// Expect: userNumber.push(beep)

// Describe: userInputArray(numbers)
// Test: If any number inputted by user contains a 2 it is returned with word "Boop!"
// Expect:  userNumber.push(boop)

// User Interface Logic: 

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    
    const number = ($("input#number").val());
    const userResult = userInputArray(number);
    $("#resultNotice").show();
    $("#resultNumbers").text(userResult);
  });
});

// Business Logic:

  const beep = "Beep!"
  const boop = "Boop!"
  const neighbor = "Won't you be my neighbor?"

function userInputArray(numbers) {
  let userNumber = [];
  for (let index = 0; index <= numbers; index += 1) {
    const words = index.toString();

    if (words.includes(3)) {
      userNumber.push(neighbor);
    } else if (words.includes(2)) {
      userNumber.push(boop);
    } else if (words.includes(1)) {
      userNumber.push(beep);
    } else {
      userNumber.push(words);
    }
  }
  return userNumber;
}