// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//need to add variable for user choices, and then return the choices back





//Function to get user password options
function userChoice () {

  //need "Error handling", for when the user chooses and option not available
  //need a "Confirm methord" to confirm user choice, or could use a prompt method
  //dont forget to make sure that they have to choose atleast one option
  //will need an if statement for rolling through the user choices on password options
  //need to make an object to store the user choice, probably a var? also need to return the object at the end

}

function randomSelected(randomizedArr) {

  //math.floor selects a random choice withing choice array
  //return the chosen element

}

function generatePassword() {
  var passLength = prompt("How long would you like your password to be? Please choose a length between 8 and 129 characters");
  var specChars = confirm("Would you like to add Special Characters? Input anything to continue, or hit the cancel button for No");
  var numChars = confirm("How about numbers? Can I add numbers? Again input anything to continue, or hit cancel button for No");
  var upperChars = confirm("Should I include capital letters? Same deal, Anything for yes and Cancel button for No");
  var lowerChar = confirm("Lastly can I add lower case letters? Hit cancel for No");
// with choices defined in variables i need to run if else if else statements to tell function the correct array to generate and pull from
//start off with password length, if we dont know how long we cant start, so if stops you if a length wasnt put in
  if (!passLength){
    window.alert("things arentworking with the length, You didnt put anything");
    return;

  } else if(passLength > 129) {
    window.alert ("Looks like your password was too long, We can only make passwords as long as 129 characters.")
    return;
// has to be else if, other wise will hit return //
  } else if(passLength < 8){
    window.alert("Looks like your password was too short, we can only make passwords as short as 8 characters.")
    return;
  }
  //generatedPassword is blank to start //
  var generatedPassword = "";
  // chosenChoices get created here and made blank at the start //
  var chosenChoices = []
  // each if statement gets ran if the attribute is true or false //
  if (specChars) {
    chosenChoices = chosenChoices.concat(specialChars)
    generatedPassword += specialChars[Math.floor(Math.random()* (specialChars.length-1))];
  
  };

  if (numChars) {

    chosenChoices = chosenChoices.concat(numberChars)
    generatedPassword += numberChars[Math.floor(Math.random()* (numberChars.length-1))];
  
  };

  if (upperChars) {

    chosenChoices = chosenChoices.concat(uppercase)
    generatedPassword += uppercase[Math.floor(Math.random()* (uppercase.length-1))];
  
  };

  if (lowerChar) {

    chosenChoices = chosenChoices.concat(lowercase)
    generatedPassword += lowercase[Math.floor(Math.random()* (lowercase.length-1))];
  
  };

  for (var i =generatedPassword.length ; i <= passLength ; i++) {

    generatedPassword += chosenChoices[Math.floor(Math.random()* (chosenChoices.length-1))];

  }
  return generatedPassword;


  //need empty variable to store concatenated passowrd
  //need empty variable holdaing all the passible password choices
  //need empty variable to hold chosen charecters.
  //error handling to see if object with choices exists or not

  //conditional statement below to add if user chose special chars and push them to chosen array

}


