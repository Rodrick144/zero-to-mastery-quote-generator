const testingStandby = document.getElementById("testing-standby");

// this is just a setter function that changes one character in a string to a different character
function swapCharacter (targetWord, targetIndex, replacementChar) {
    let finalReturnedWord = "";
    let stoppedCharacter = 0;
    let quantIterate = 1;
    for (let k = 0; k < targetIndex; k++) {
        finalReturnedWord += targetWord[k];
        stoppedCharacter = k;
        quantIterate = 2;
    }

    finalReturnedWord += replacementChar;
    for (let l = (stoppedCharacter + quantIterate); l < targetWord.length; l++) {
        finalReturnedWord += targetWord[l];
    }

    return finalReturnedWord;
}

// Determines the Fermi-Pico-Bagels status of each letter in each word and returns that result as a string such as "bpbbf" (char 0 is bagels and a complete miss, char 1 is pico and is elsewhere in the word, etc.)
function scoreCharacters (inputWord, comparisonWord) {
    // this will be the returned result - it would be best to have an initialized value because altering individual characters is probably more precise then trying to concatenate them in the correct order
    let charScore = "xxxxx";

    // I get the feeling that stuff will go wrong if the words are not confirmed to be the same length, soooo
    if (!(inputWord.length === comparisonWord.length)) {
        console.log("Error: String lengths do not match!");
    } else {

        for (let i = 0; i < inputWord.length; i++) {
            if (inputWord[i] === comparisonWord[i]) {
                // fermi
                charScore = swapCharacter(charScore, i, "f");


            } else {
                for (let j = 0; j < inputWord.length; j++) {
                    if (inputWord[i] === comparisonWord[j]) {
                        // pico
                        charScore = swapCharacter(charScore, i, "p");

                    }
                }
            }

            if (charScore[i] === "x") {
                // bagels
                charScore = swapCharacter(charScore, i, "b");

            }
        }

    }

    return charScore;
}

let example = scoreCharacters("ounce", "latte");
console.log(example);
example = scoreCharacters("raise", "latte");
console.log(example);
example = scoreCharacters("lathe", "latte");
console.log(example);
example = scoreCharacters("latte", "latte");
console.log(example);
