//Business Logic
function parseOnes (num) {
  var output = "";
  if (num <= 3) {
    for (var i = 0; i < num; i++) {
      output += "I";
    }
  } else if (num === 4) {
    output += "IV";
  } else if (num > 4 && num < 9) {
    output += "V";
    for (var i = 0; i < num - 5; i++) {
      output += "I";
    }
  } else if (num === 9) {
    output += "IX";
  }
  return output;
}

//Front-End Logic
$(function() {
  $("form").keyup(function() {
    var userInput = parseInt($("input#user-input").val());
    var output = parseOnes(userInput);

    $("p#output").text(output);
  });
});

//use modulo?
