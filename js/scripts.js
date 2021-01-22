// Describe: userInputArray(numbers)

// Test: If any number inputted by user contains a 1 it is returned with the word "Beep!"
// Expect: userNumber.push(beep)

// Test: If any number inputted by user contains a 2 it is returned with word "Boop!"
// Expect:  userNumber.push(boop)

// Test: If any number inputted by user contains a 3 it is returned with word "Won't you be my neighbor?"
// Expect:  userNumber.push(neighbor)

// Test: Program will recognize when a number contains 1,2, or 3 and return with a string of numbers replacing 1,2, or 3 with "beep, "boop", or "Won't you be my neighbor?"
// Expect:  return userNumber

// Test: Program will recognize when a number contains 1,2, or 3 and return with a string of numbers replacing 1,2, or 3 with "beep, "boop", or "Won't you be my neighbor?". Program will still include range of other numbers not matching those conditions in the string.
// Expect:  return userNumber

// User Interface Logic: 

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    
    const number = ($("input#number").val());
    const userResult = userInputArray(number);
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
    const input = index.toString();

    if (input.includes(3)) {
      userNumber.push(neighbor);
    } else if (input.includes(2)) {
      userNumber.push(boop);
    } else if (input.includes(1)) {
      userNumber.push(beep);
    } else {
      userNumber.push(input);
    }
  }
  return userNumber;
}