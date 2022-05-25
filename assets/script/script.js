// Assignment code here

// password character variables
var characterLength = [];
var choiceArray = [];
var specialCharacterArray = ['!','@','#','$','%','^','&','*','(',')','_','<','>','|'];
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArray = ['1','2','3','4','5','6','7','8','9','0'];

// prompts function 
var promptValues = function() {
  choiceArray = [];
  characterLength = parseInt(prompt("How many characters should be included in your password? Please choose any amount betwen 8 and 128."));
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Total number of characters must be between 8 and 128. Please input a valid amount."); 
    return false;
  }
  if (confirm("Do you wish to include lowercase characters?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }
  if (confirm("Do you wish to include uppercase characters?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }
  if (confirm("Do you wish to include special characters?")) {
    choiceArray = choiceArray.concat(specialCharacterArray);
  }
  if (confirm("Do you wish to include numbers?")) {
    choiceArray = choiceArray.concat(numberArray);
  }
  
  if (choiceArray.length === 0) {
    window.alert("Please choose at least one character type to continue.");
    promptValues();
  }

  return true;
}



// password based on prompts
var generatePassword = function() {
    var password = "";
    for(var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArray.length);
      password = password + choiceArray[randomIndex];
    }
    return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  var correctPrompts = promptValues();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var finalPassword = generatePassword();
    passwordText.value = finalPassword;
  } 
  else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
