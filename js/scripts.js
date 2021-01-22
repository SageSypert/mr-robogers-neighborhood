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

function userInputArray(numbers) {
  let userNumber = [];
  for (let index = 0; index <= numbers; index += 1) {
    const input = index.toString();

    const beep = "Beep!"
    const boop = "Boop!"
    const neighbor = "Won't you be my neighbor?"

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