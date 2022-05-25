// Assignment code here

// password character variables
var characterLength = 8;
var choiceArray = [];

var specialCharacterArray = ['!','@','#','$','%','^','&','*','(',')','_','<','>','|'];
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArray = ['1','2','3','4','5','6','7','8','9','0'];

// password based on prompts
function generatePassword() {
    var password = "";
    for(var i = 0; i < characterLength; i++) {
      var randomIndex = math.floor(Math.random() * choiceArray.length);
      password = password + choiceArray[randomIndex];
    }
    return password;
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password2 = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password2;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

