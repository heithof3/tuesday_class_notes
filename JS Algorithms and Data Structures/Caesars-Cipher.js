//Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, 
//also known as a shift cipher. In a shift cipher the meanings of the letters are shif
//ted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
//Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), 
//but do pass them on.

function rot13(str) {
let array = [];
let reg
  return str;
}

rot13("SERR PBQR PNZC");

function rot13(str) {
  str.toUpperCase();
  var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
  var nop = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var arr = str.split(""); 

    for (var i = 0; i < arr.length; i++) { 
      for (var j = 0; j < abc.length; j++) { 
      if (arr[i] === abc[j]) {
        arr[i] = nop[j]; 
      } else if (arr[i] === nop[j]) {
        arr[i] = abc[j]; 
      }
    }
  }

  return arr.join(""); 

rot13("FHCRE FRPERG!!!");

// function rot13(str) {
//   str.toUpperCase(); // Convert `str` string to uppercase letters
//   var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
//   var nop = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//   var arr = str.split(""); // Splits `str` into an array where each element is an individual character (including non-alphabetic characters)

//     for (var i = 0; i < arr.length; i++) { // Iterate number of `arr` elements
//       for (var j = 0; j < abc.length; j++) { // Iterate number of `abc`/`nop` array elements
//       if (arr[i] === abc[j]) {
//         arr[i] = nop[j]; // Swap the `arr` character for the corresponding `nop` array character
//       } else if (arr[i] === nop[j]) {
//         arr[i] = abc[j]; // Swap the `arr` character for the corresponding `abc` array character
//       }
//     }
//   }

//   return arr.join(""); // Join all `arr` array characters back into a string, returning the deciphered `str` with all non-alphabetical characters preserved
// }

// rot13("FHCRE FRPERG!!!");


// ALPHA	KEY	BASE 	 	 	 ROTATED	ROT13
//     -------------------------------------------------------------
//     [A]     65  <=>   0 + 13  =>  13 % 26  <=>  13 + 65 = 78 [N]
//     [B]     66  <=>   1 + 13  =>  14 % 26  <=>  14 + 65 = 79 [O]
//     [C]     67  <=>   2 + 13  =>  15 % 26  <=>  15 + 65 = 80 [P]
//     [D]     68  <=>   3 + 13  =>  16 % 26  <=>  16 + 65 = 81 [Q]
//     [E]     69  <=>   4 + 13  =>  17 % 26  <=>  17 + 65 = 82 [R]
//     [F]     70  <=>   5 + 13  =>  18 % 26  <=>  18 + 65 = 83 [S]
//     [G]     71  <=>   6 + 13  =>  19 % 26  <=>  19 + 65 = 84 [T]
//     [H]     72  <=>   7 + 13  =>  20 % 26  <=>  20 + 65 = 85 [U]
//     [I]     73  <=>   8 + 13  =>  21 % 26  <=>  21 + 65 = 86 [V]
//     [J]     74  <=>   9 + 13  =>  22 % 26  <=>  22 + 65 = 87 [W]
//     [K]     75  <=>  10 + 13  =>  23 % 26  <=>  23 + 65 = 88 [X]
//     [L]     76  <=>  11 + 13  =>  24 % 26  <=>  24 + 65 = 89 [Y]
//     [M]     77  <=>  12 + 13  =>  25 % 26  <=>  25 + 65 = 90 [Z]
//     [N]     78  <=>  13 + 13  =>  26 % 26  <=>   0 + 65 = 65 [A]
//     [O]     79  <=>  14 + 13  =>  27 % 26  <=>   1 + 65 = 66 [B]
//     [P]     80  <=>  15 + 13  =>  28 % 26  <=>   2 + 65 = 67 [C]
//     [Q]     81  <=>  16 + 13  =>  29 % 26  <=>   3 + 65 = 68 [D]
//     [R]     82  <=>  17 + 13  =>  30 % 26  <=>   4 + 65 = 69 [E]
//     [S]     83  <=>  18 + 13  =>  31 % 26  <=>   5 + 65 = 70 [F]
//     [T]     84  <=>  19 + 13  =>  32 % 26  <=>   6 + 65 = 71 [G]
//     [U]     85  <=>  20 + 13  =>  33 % 26  <=>   7 + 65 = 72 [H]
//     [V]     86  <=>  21 + 13  =>  34 % 26  <=>   8 + 65 = 73 [I]
//     [W]     87  <=>  22 + 13  =>  35 % 26  <=>   9 + 65 = 74 [J]
//     [X]     88  <=>  23 + 13  =>  36 % 26  <=>  10 + 65 = 75 [K]
//     [Y]     89  <=>  24 + 13  =>  37 % 26  <=>  11 + 65 = 76 [L]
//     [Z]     90  <=>  25 + 13  =>  38 % 26  <=>  12 + 65 = 77 [M]