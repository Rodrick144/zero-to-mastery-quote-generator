const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = [];

// Show loading
function loading () {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide loading
function complete () {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show new quote
function newQuote() {
    loading ();
    // Pick a random quote from API quotes array
    // const experiment = localQuotes[2];
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    if(!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }

    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set quote, hide loader
    quoteText.textContent = quote.text;
    setTimeout(function(){
        complete ();
    }, 400); 
    
    
}


// Get quotes from API
async function getQuotes() {
    loading ();

    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch(error) {
        // catch error here
        alert("Oops! Something went wrong...");
    }
}

//Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

loading();
// On load:
getQuotes();
// newQuote();