//Business Logic
function parsePlacesAndConvert (num) {
  var output = "";

  if (num.length === 1) {
    output += parseOnes(num);
  } else if (num.length === 2) {
    output += parseTens(num[0]);
    output += parseOnes(num[1]);
  } else if (num.length === 3) {
    output += parseHundreds(num[0]);
    output += parseTens(num[1]);
    output += parseOnes(num[2]);
  } else if (num.length === 4 && num < 4000) {
    output += parseThousands(num[0]);
    output += parseHundreds(num[1]);
    output += parseTens(num[2]);
    output += parseOnes(num[3]);
  } else if (num >= 4000) {
    output += "Requested number is too large.";
  }
  return output;
}

function parseOnes (numString) {
  var output = "";
  var num = parseInt(numString);
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

function parseTens (numString) {
  var output = "";
  var num = parseInt(numString);
  if (num <= 3) {
    for (var i = 0; i < num; i++) {
      output += "X";
    }
  } else if (num === 4) {
    output += "XL";
  } else if (num > 4 && num < 9) {
    output += "L";
    for (var i = 0; i < num - 5; i++) {
      output += "X";
    }
  } else if (num === 9) {
    output += "XC";
  }
  return output;
}

function parseHundreds (numString) {
  var output = "";
  var num = parseInt(numString);
  if (num <= 3) {
    for (var i = 0; i < num; i++) {
      output += "C";
    }
  } else if (num === 4) {
    output += "CD";
  } else if (num > 4 && num < 9) {
    output += "D";
    for (var i = 0; i < num - 5; i++) {
      output += "C";
    }
  } else if (num === 9) {
    output += "CM";
  }
  return output;
}

function parseThousands (numString) {
  var output = "";
  var num = parseInt(numString);
  if (num <= 4) {
    for (var i = 0; i < num; i++) {
      output += "M";
    }
  }
  return output;
}

//Front-End Logic
$(function() {
  $("form").keyup(function() {
    var userInput = $("input#user-input").val(); //Since I'm treating it like a string. Opt not to parseInt()?
    var output = parsePlacesAndConvert(userInput);
    $("p#output").text(output);
  });
});

//use modulo?
