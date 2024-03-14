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




function checkNumberType(number) {
    if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

// Example usage:
var userInput = parseFloat(prompt("Enter a number:"));
checkNumberType(userInput);