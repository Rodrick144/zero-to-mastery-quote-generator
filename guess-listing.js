let legalGuesses1 = `aahed
aalii
aargh
aarti
abaca
abaci
abacs
abaft
abaka
abamp
aband
abash
abask
abaya
abbas
abbed`;

let legalGuesses2 = [];


// Parses legalGuesses1 and inserts the words into an array (hopefully)
let charCounter1 = 0;
let letterCache = "";
for (let i = 0; i <= (legalGuesses1.length); i = i + 1) {
    if (charCounter1 == 5) {
        charCounter1 = -1;
        legalGuesses2.push(letterCache);
        letterCache = "";
        console.log("add a word");
        console.log(charCounter1);
    } else {
        let tackOn = legalGuesses1[i];
        letterCache = letterCache + tackOn;
        console.log("add a character");
        console.log(letterCache);
        console.log(i);
        console.log(tackOn);
        console.log(charCounter1);
    }

    charCounter1++;
}

console.log(legalGuesses2);