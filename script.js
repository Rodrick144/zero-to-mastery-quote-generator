// let apiQuotes = [];

// Show new quote
function newQuote() {
    // Pick a random quote from API quotes array
    // const experiment = localQuotes[2];
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}


// Get quotes from API
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
// getQuotes();
newQuote();