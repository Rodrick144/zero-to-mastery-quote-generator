// Show new quote
function newQuote() {
    // Pick a random quote from API quotes array
    const Quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(Quote);
}


// // Get quotes from API
// async function getQuotes() {
//     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch(error) {
//         // catch error here
//         alert("Oops! Something went wrong...");
//     }
// }

// On load:
newQuote();