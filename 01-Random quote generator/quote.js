var quotes = [
    {quote: 'I\'ll be back',
     source: 'T-100',
     citation: 'Terminator',
     year: '1984',
     backColor: '#7e0424'},
    
    {quote: 'Run! Get to the chopper!',
     source: 'Dutch Schaeffer',
     citation: 'Predator',
     year: '1987',
     backColor: '#306540'},
    
    {quote: 'See you at the party Richter!',
     source: 'Douglas Quaid',
     citation: 'Total Recall',
     year: '1990',
     backColor: '#834407'},
    
    {quote: 'Don\'t disturb my friend, he\'s dead tired',
     source: 'John Matrix',
     citation: 'Commando',
     year: '1985',
     backColor: '#390c55'},
    
    {quote: 'Hasta la vista, baby',
     source: 'T-100',
     citation: 'Terminator 2',
     year: '1990',
     backColor: '#282c54'},
    
    {quote: 'What killed the dinosaurs? The ice age!',
     source: 'Mr Freeze',
     citation: 'Batman and Robin',
     year: '1997',
     backColor: '#172631'},
    
    {quote: 'Hey, Killian! Here\'s Subzero! Now... plain zero!',
     source: 'Ben Richards',
     citation: 'The Running Man',
     year: ' 1987',
     backColor: 'darkslateblue'}
    
    ]
//call the Div with 'quote-box' id
var mainDiv = document.getElementById('quote-box');

//call the button element with 'loadQuote' id
var quoteButton = document.getElementById('loadQuote');

//define quote array length
var quoteNumber = quotes.length;

//below code displays random quote upon window load
var randomNumber = Math.floor(Math.random() * quoteNumber);
mainDiv.innerHTML = '<p class="quote">" ' + quotes[randomNumber].quote + ' "</p>';
mainDiv.innerHTML += '<p class="source">' + quotes[randomNumber].source;
mainDiv.innerHTML += '<span class="citation">' + quotes[randomNumber].citation + ', </span>'; 
mainDiv.innerHTML += '<span class="year">' + quotes[randomNumber].year + '</span></p>';
document.body.style.backgroundColor = quotes[randomNumber].backColor;


//function that generates a random quote random number
var randomQuote = function getRandomQuote() {
    
    var randomNumber = Math.floor(Math.random() * quoteNumber);
    return randomNumber;
    
}

//printQuote function that displays quotes after button click
quoteButton.onclick = function printQuote() {
    
    var randomNumber = Math.floor(Math.random() * quoteNumber);
    
    mainDiv.innerHTML = '<p class="quote">" ' + quotes[randomNumber].quote + ' "</p>';
    mainDiv.innerHTML += '<p class="source">' + quotes[randomNumber].source;
    mainDiv.innerHTML += '<span class="citation">' + quotes[randomNumber].citation + ', </span>'; 
    mainDiv.innerHTML += '<span class="year">' + quotes[randomNumber].year + '</span></p>';
    document.body.style.backgroundColor = quotes[randomNumber].backColor;
    
} // end of printQuote function







