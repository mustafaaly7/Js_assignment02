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





// ------> Q8


// function processFlowchart(value1, value2) {
//   // Check the first condition (replace with your actual condition)
//   if (value1 > 10) {
//     // If true, perform calculation A (replace with your calculation)
//     const resultA = value1 * 2;
//     console.log("Result A:", resultA);
//   } else {
//     // If false, check the second condition (replace with your actual condition)
//     if (value2 < 5) {
//       // If true, perform calculation B (replace with your calculation)
//       const resultB = value2 + 3;
//       console.log("Result B:", resultB);
//     } else {
//       // If all conditions are false, perform default action (optional)
//       console.log("Default action (if applicable)");
//     }
//   }
// }

// // Example usage (replace with your input values)
// const num1 = 15;
// const num2 = 3;
// processFlowchart(num1, num2);








// ------> Chap 2 ARRAY

// ----> Q1 - Q7


// var studentNamesLiteral = [];

// var studentNamesObject = new Array();

// var stringsArray = ["apple", "banana", "orange"];

// var numbersArray = [1, 2, 3, 4, 5];

// var booleanArray = [true, false, true];

// var mixedArray = ["apple", 3, true, "banana", false];

// var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// // Displaying education qualifications in the browser
// document.write("<h2>Education Qualifications in Pakistan:</h2>");
// document.write("<ul>");
// for (var i = 0; i < educationQualifications.length; i++) {
//     document.write("<li>" + educationQualifications[i] + "</li>");
// }
// document.write("</ul>");





// -----> Q8


// // Array to store student names
// var studentNames = ["Alice", "Bob", "Charlie"];

// // Array to store scores of students
// var scores = [400, 450, 380]; // Scores out of 500 for each student

// // Calculate percentages
// var percentages = [];
// for (var i = 0; i < scores.length; i++) {
//     percentages.push((scores[i] / 500) * 100);
// }

// // Display scores and percentages
// console.log("Student Scores and Percentages:");
// for (var i = 0; i < studentNames.length; i++) {
//     console.log(studentNames[i] + ": Score = " + scores[i] + ", Percentage = " + percentages[i] + "%");
// }





// -----> Q9




// // Initialize an array with color names
// var colors = ["Red", "Green", "Blue"];

// // Display the array elements in the browser
// document.write("<h3>Initial Array:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// // Ask the user what color to add to the beginning
// var colorToAddBeginning = prompt("Enter a color to add to the beginning:");

// // Add the color to the beginning of the array
// colors.unshift(colorToAddBeginning);

// // Display the updated array in the browser
// document.write("<h3>Array after adding color to the beginning:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// // Ask the user what color to add to the end
// var colorToAddEnd = prompt("Enter a color to add to the end:");

// // Add the color to the end of the array
// colors.push(colorToAddEnd);

// // Display the updated array in the browser
// document.write("<h3>Array after adding color to the end:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// // Add two more colors to the beginning of the array
// colors.unshift("Yellow", "Orange");

// // Display the updated array in the browser
// document.write("<h3>Array after adding two colors to the beginning:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// // Delete the first color in the array
// colors.shift();

// // Display the updated array in the browser
// document.write("<h3>Array after deleting the first color:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// // Delete the last color in the array
// colors.pop();

// // Display the updated array in the browser
// document.write("<h3>Array after deleting the last color:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// // Ask the user at which index to add a color and the color name
// var indexToAddColor = parseInt(prompt("Enter the index to add a color:"));
// var colorToAddAtIndex = prompt("Enter the color name:");

// // Add the color to the desired position/index
// colors.splice(indexToAddColor, 0, colorToAddAtIndex);

// // Display the updated array in the browser
// document.write("<h3>Array after adding color at desired position:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// // Ask the user at which index to delete color(s) and how many colors to delete
// var indexToDeleteColor = parseInt(prompt("Enter the index to delete color(s):"));
// var numColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));

// // Remove the same number of color(s) from the user-defined position/index
// colors.splice(indexToDeleteColor, numColorsToDelete);

// // Display the updated array in the browser
// document.write("<h3>Array after deleting color(s) from desired position:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");





// -----> Q10


// // Array to store student scores
// var studentScores = [320, 280, 480, 120];

// // Sort the array in ascending order
// studentScores.sort(function(a, b) {
//     return a - b;
// });

// // Display the sorted array
// console.log("Sorted student scores (ascending order):"+ studentScores);



// -----> Q11




// // Initialize an array with city names
// var cities = ["Karachi", "Lahore", "Quetta", "Peshawar"];

// // Initialize an empty array to store selected cities
// var selectedCities = [];

// // Copy 3 array elements from cities array to selectedCities array
// selectedCities.push(cities[0], cities[2], "Islamabad");

// // Display the selected cities array
// console.log("Selected cities:", selectedCities);





// ----->Q12



// var arr = ["This", "is", "my", "cat"];

// // Create a single string using array's join method
// var singleString = arr.join(" ");

// // Display the single string
// console.log(singleString);




// ------> Q13



// // Initialize an empty array
// var fifoQueue = [];

// // Add values one by one to the array (FIFO)
// fifoQueue.push("Keyboard");
// fifoQueue.push("Mouse");
// fifoQueue.push("Printer");

// // Access and remove values in the order they were stored (FIFO)
// var firstValue = fifoQueue.shift();
// var secondValue = fifoQueue.shift();
// var thirdValue = fifoQueue.shift();

// // Display Out
// console.log("Out: \n", firstValue);
// console.log("Out: \n", secondValue);
// console.log("Out: \n", thirdValue);




// ------> Q15




var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Generate the dropdown/select menu using document.write()
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");