const  quotes = [
    {
        name: "Dalai Lama",
        Quotes: "The purpose of our lives is to be happy.",
    },

    {
        name: " John Lennon",
        Quotes: "Get busy living or get busy dying.",
    },

    {
        name: " Mae West",
        Quotes: "You only live once, but if you do it right, once is enough.",
    },

    {
        name: " Albert Einstein",
        Quotes: "If you want to live a happy life, tie it to a goal, not to people or things.",
    },

    {
        name: " Will Smith",
        Quotes: "Not how long, but how well you have lived is the main thing.",
    },



]

let quoteBtn = document.querySelector('#quotebtn')
let quotess = document.querySelector('#quotes')
let author = document.querySelector('#author')

quoteBtn.addEventListener('click' , displayQuotes)

function displayQuotes(){
    let number = Math.floor(Math.random()*quotes.length)
    quotess.innerHTML = quotes[number].name
    author.innerHTML = quotes[number].Quotes
}