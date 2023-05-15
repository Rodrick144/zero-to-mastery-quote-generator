const testingStandby = document.getElementById("testing-standby");

// Determines the Fermi-Pico-Bagels status of each letter in each word and returns that result as a string such as "bpbbf" (char 0 is bagels and a complete miss, char 1 is pico and is elsewhere in the word, etc.)

// this is just a setter function that changes one character in a string to a different character
function swapCharacter (targetWord, targetIndex, replacementChar) {
    let finalReturnedWord = "";
    let stoppedCharacter = 0;
    for (let i = 0; i < targetIndex; i++) {
        finalReturnedWord += targetWord[i];
        stoppedCharacter = i;
    }

    finalReturnedWord += replacementChar;

    for (let i = (stoppedCharacter + 2); i < targetWord.length; i++) {
        finalReturnedWord += targetWord[i];
    }

    return finalReturnedWord;
}

// function scoreCharacters (inputWord, comparisonWord) {
//     // I get the feeling that stuff will go wrong if the words are not confirmed to be the same length, soooo
//     if (!(inputWord.length === comparisonWord.length)) {
//         console.log("Error: String lengths do not match!");
//     } else {
//         // this will be the finished project - it would be best to have an initialized value because altering individual characters is probably more precise then trying to concatenate them in the correct order
//         let charScore = "00000";

//         for (let i = 0; i < inputWord.length; i++) {
//             if (inputWord[i] === comparisonWord[i]) {
//                 // fermi
//                 charScore = charScore

//             } else {
//                 for (let j = 0; j < inputWord.length; j++) {
//                     if (inputWord[i] === comparisonWord[j]) {
//                         // pico
//                         charScore[i] = "p";
//                     }
//                 }
//             }
//         }

//     }
// }