//an array of quote objects
var quotes = [
    {quote: 'I\'ll be back',
     source: 'T-100',
     citation: 'Terminator',
     year: '1984',
     backColor: '#7e0424',
     image: 't1000.jpeg'},
    
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



//function that generates a random quote
function getRandomQuote() {
    var quoteNumber = quotes.length;
    var randomNumber = Math.floor(Math.random() * quoteNumber);
    var randomQuote = quotes[randomNumber];
    return randomQuote;
    
} // end of getRandomQuote function


//display a random quote upon browser load or browser refresh
var newQuote = getRandomQuote();
    
mainDiv.innerHTML = '<p class="quote">" ' + newQuote.quote + ' "</p>';
mainDiv.innerHTML += '<p class="source">' + newQuote.source;
mainDiv.innerHTML += '<span class="citation">' + newQuote.citation + '</span>'; 
mainDiv.innerHTML += '<span class="year">' + newQuote.year + '</span></p>';
document.body.style.backgroundColor = newQuote.backColor;




//printQuote function that displays quotes after button click
quoteButton.onclick = function printQuote() {
    
    newQuote = getRandomQuote();
    
    mainDiv.innerHTML = '<p class="quote">" ' + newQuote.quote + ' "</p>';
    mainDiv.innerHTML += '<p class="source"> ' + newQuote.source;
    mainDiv.innerHTML += '<span class="citation">' +  newQuote.citation + '</span>'; 
    mainDiv.innerHTML += '<span class="year">' + newQuote.year + '</span></p>';
    document.body.style.backgroundColor = newQuote.backColor;

    
} // end of printQuote function







