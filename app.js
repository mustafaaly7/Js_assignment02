// Chap1 Q1








// function checkCharacterType(input) {
//     var charCode = input.charCodeAt(0);

//     if (charCode >= 48 && charCode <= 57) {
//         return "Number";
//     } else if (charCode >= 65 && charCode <= 90) {
//         return "Uppercase Letter";
//     } else if (charCode >= 97 && charCode <= 122) {
//         return "Lowercase Letter";
//     } else {
//         return "Invalid input";
//     }
// }

// // Example usage:
// var input = prompt("Enter a character:");
// var characterType = checkCharacterType(input);
// console.log("Character type:", characterType);




// ---> Q2




// function compareIntegers(a, b) {
//     if (a > b) {
//         console.log(a + " is larger than " + b);
//     } else if (b > a) {
//         console.log(b + " is larger than " + a);
//     } else {
//         console.log("Both integers are equal.");
//     }
// }

// // Example usage:
// var num1 = parseInt(prompt("Enter the first integer:"));
// var num2 = parseInt(prompt("Enter the second integer:"));
// compareIntegers(num1, num2);





// ----> Q3




// function checkNumberType(number) {
//     if (number > 0) {
//         console.log("The number is positive.");
//     } else if (number < 0) {
//         console.log("The number is negative.");
//     } else {
//         console.log("The number is zero.");
//     }
// }

// // Example usage:
// var userInput = parseFloat(prompt("Enter a number:"));
// checkNumberType(userInput);





// -----> Q4





// function isVowel(character) {
//     // Convert the character to lowercase to handle both uppercase and lowercase vowels
//     character = character.toLowerCase();

//     // Check if the character is a vowel
//     return character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u';
// }

// // Example usage:
// var inputCharacter = prompt("Enter a character:");
// var result = isVowel(inputCharacter);

// console.log("Is the character a vowel?", result);





// ----> Q5




// var correctPassword = "asd123";

// // Ask user to enter their password
// var enteredPassword = prompt("Enter your password:");

// // Validate the passwords
// if (enteredPassword === null || enteredPassword === "") {
//     console.log("Please enter your password.");
// } else if (enteredPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password.");
// }


// -----> Q6



// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }




// -----> Q7



// // Prompt user to enter time in 24-hour clock format
// var inputTime = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm):"));

// // Initialize variables for storing converted time
// var hour;
// var meridiem;

// // Convert time
// if (inputTime >= 0 && inputTime <= 2359) {
//     if (inputTime >= 100 && inputTime <= 1159) {
//         hour = Math.floor(inputTime / 100);
//         meridiem = "AM";
//     } else if (inputTime >= 1200 && inputTime <= 1259) {
//         hour = 12;
//         meridiem = "PM";
//     } else if (inputTime >= 1300 && inputTime <= 2359) {
//         hour = Math.floor((inputTime - 1200) / 100);
//         meridiem = "PM";
//     } else if (inputTime === 0) {
//         hour = 12;
//         meridiem = "AM";
//     } else { // Invalid input
//         console.log("Invalid time format entered.");
//     }

//     // Display converted time
//     if (hour !== undefined && meridiem !== undefined) {
//         console.log("Converted time:", hour + ":" + (inputTime % 100 < 10 ? "0" : "") + (inputTime % 100) + " " + meridiem);
//     }
// } else { // Invalid input
//     console.log("Invalid time format entered.");
// }