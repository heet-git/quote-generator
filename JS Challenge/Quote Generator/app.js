//DOM objects

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader')

//get quote
let apiQuotes = []
function loading(){
    loader.hidden = false
    quoteContainer.hidden = true
}

function loaded(){
    loader.hidden = true
    quoteContainer.hidden = false
}


function newQuote(){
        loading()
        // const number = Math.floor(Math.random() * apiQuotes.length)
        // console.log (number)
        const newQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)] 
        authorText.textContent = (!newQuote.author) ? "- Unknown" : "- "+ newQuote.author
        quoteText.textContent = newQuote.text   
        if (newQuote.text.length > 50){
            quoteText.classList.add('long-quote') 
        }
        else {
            quoteText.classList.remove('long-quote')
        }
        loaded()
}
async function getQuotes(){
    loading()
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote()

    } catch (error) {
        
    }
}

//Twitter

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}
    ${authorText.textContent}`
    window.open(twitterUrl, "_blank", "width=500, height=500")
}

newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

//on loads
loading();
getQuotes();