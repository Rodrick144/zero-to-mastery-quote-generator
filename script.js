const testingStandby = document.getElementById("testing-standby");

const qBtn = document.getElementById("q");
const wBtn = document.getElementById("w");
const eBtn = document.getElementById("e");
const rBtn = document.getElementById("r");
const tBtn = document.getElementById("t");
const yBtn = document.getElementById("y");
const uBtn = document.getElementById("u");
const iBtn = document.getElementById("i");
const oBtn = document.getElementById("o");
const pBtn = document.getElementById("p");

const currGuess = document.getElementById("current-guess");

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

// Maps each word for instances of each letter - to be used in determining pico in scoreCharacters when the input or comparison words contain multiple of one character
function mapCharInstances (mappedWord) {
    let middleMap = "";
    for (let i = 0; i < mappedWord.length; i++) {
        let k = 0;
        for (let j = 0; j < mappedWord.length; j++) {
            if (mappedWord[i] === mappedWord[j]) {
                k++;
            }
        }

        if (k === 0) {
            k++;
        }

        middleMap += (k + mappedWord[i]);
    }

    // console.log(middleMap);

    // Evaluates how many unique characters are in a word - who knows! It might be useful.
    let totUpChars = "";

    for (let i = 1; i < middleMap.length; i += 2) {
        for (let j = 1; j < middleMap.length; j += 2) {
            // console.log(i + " // i");
            // console.log(j + " // j");
            if ((middleMap[i] === middleMap[j]) && (i != j)) {   
                // console.log(middleMap[i]);             
                totUpChars += middleMap[i-1];
                totUpChars += "0";
                totUpChars += middleMap[i];
            }
        }
    }
    // console.log(totUpChars);

    for (let i = 0; i < mappedWord.length; i++) {
        if (middleMap[i*2] != 1) {
            // console.log(i + " // for loop I");
            // console.log(((i * 2) + 1) + " // i * 2 + 1");
            // console.log((middleMap[(i * 2) + 1]) + " // finds middlemap char at index of previous expression - should be a letter");
            // console.log((totUpChars.indexOf(middleMap[(i * 2) + 1])) + " // finds the index of the letter from previous expression in totUpChars - should be an integer");
            // console.log((totUpChars[(totUpChars.indexOf(middleMap[(i * 2) + 1]))]) + " // finds the letter matching the totUpChars index from previous expression - should be a letter, the same one from middlemap char at index");
            // console.log(totUpChars[(totUpChars.indexOf(middleMap[(i * 2) + 1])) - 1] + " // finds the char immediately previous to the letter from the last expression - should be a number dictating how many times that that letter has been encountered in middleMap");
            // console.log((parseInt(totUpChars[(totUpChars.indexOf(middleMap[(i * 2) + 1])) - 1]) + 1) + " // adds 1 to that number - should be then swap-inserted into middleMap");
            middleMap = swapCharacter (middleMap, i*2, (parseInt(totUpChars[(totUpChars.indexOf(middleMap[(i * 2) + 1])) - 1]) + 1));
            totUpChars = swapCharacter (totUpChars, (parseInt(totUpChars.indexOf(middleMap[(i*2)+1])) - 1), (parseInt(totUpChars[(totUpChars.indexOf(middleMap[(i * 2) + 1])) - 1]) + 1));

            // console.log(middleMap);
            // console.log(totUpChars);
        }
    }

    // console.log(middleMap);



    return middleMap;

}

// Determines the Fermi-Pico-Bagels status of each letter in each word and returns that result as a string such as "bpbbf" (char 0 is bagels and a complete miss, char 1 is pico and is elsewhere in the word, etc.)
function scoreCharacters (guessWord, comparisonWord) {
    // this will be the returned result - it would be best to have an initialized value because altering individual characters is probably more precise then trying to concatenate them in the correct order
    let charScore = "xxxxx";

    // I get the feeling that stuff will go wrong if the words are not confirmed to be the same length, soooo
    if (!(guessWord.length === comparisonWord.length)) {
        console.log("Error: String lengths do not match!");
    } else {

        for (let i = 0; i < guessWord.length; i++) {
            if (guessWord[i] === comparisonWord[i]) {
                // fermi
                charScore = swapCharacter(charScore, i, "f");


            } else {
                if ((mapCharInstances(guessWord))[i * 2] != 1) {
                    if ((mapCharInstances(comparisonWord).indexOf((mapCharInstances(guessWord))[i * 2] + (mapCharInstances(guessWord))[(i * 2) + 1])) != -1) {
                        // pico
                        charScore = swapCharacter(charScore, i, "p");
                    }
                } else {
                    for (let j = 0; j < guessWord.length; j++) {
                        if (guessWord[i] === comparisonWord[j]) {
                            // pico
                            charScore = swapCharacter(charScore, i, "p");

                        }
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

let guessEntry = "";

function typeGuess(keyboardChar) {
    if (!(guessEntry.length >= 5)) {
        guessEntry += keyboardChar;
        currGuess.textContent = guessEntry;
    }
}

qBtn.addEventListener('click', typeGuess("q"));
wBtn.addEventListener('click', typeGuess("w"));
eBtn.addEventListener('click', typeGuess);
rBtn.addEventListener('click', typeGuess);
tBtn.addEventListener('click', typeGuess);
yBtn.addEventListener('click', typeGuess);
uBtn.addEventListener('click', typeGuess);
iBtn.addEventListener('click', typeGuess("i"));
oBtn.addEventListener('click', typeGuess);
pBtn.addEventListener('click', typeGuess);
