var quotes = [
    {phrase: 'I\'ll be back',
     person: 'T-100',
     movie: 'Terminator, 1984',
     backColor: '#7e0424'},
    
    {phrase: 'Run! Get to the chopper!',
     person: 'Dutch Schaeffer',
     movie: 'Predator, 1987',
     backColor: '#306540'},
    
    {phrase: 'See you at the party Richter!',
     person: 'Douglas Quaid',
     movie: 'Total Recall, 1990',
     backColor: '#834407'},
    
    {phrase: 'Don\'t disturb my friend, he\'s dead tired',
     person: 'John Matrix',
     movie: 'Commando, 1985',
     backColor: '#390c55'},
    
    {phrase: 'Hasta la vista, baby',
     person: 'T-100',
     movie: 'Terminator 2, 1990',
     backColor: '#282c54'},
    
    {phrase: 'What killed the dinosaurs? The ice age!',
     person: 'Mr Freeze',
     movie: 'Batman and Robin, 1997',
     backColor: '#172631'},
    
    {phrase: 'Hey, Killian! Here\'s Subzero! Now... plain zero!',
     person: 'Ben Richards',
     movie: 'The Running Man, 1987',
     backColor: 'darkslateblue'}
    
    ]


var quoteNumber = quotes.length;
var randomNumber = Math.floor(Math.random() * quoteNumber);
var i = 0;


var divInfo = document.getElementById('info');
var mainQuote = document.createElement('p');
var quoteInfo = document.createElement('h3');



divInfo.appendChild(mainQuote);
divInfo.appendChild(quoteInfo);

//var intervalID = window.setInterval(autoQuotes, 5000);

//Info for page load. Random info will be generated.


mainQuote.innerHTML = '" ' + quotes[randomNumber].phrase + ' "' + '<br>';
quoteInfo.innerHTML = '- ' + quotes[randomNumber].person + ', ';
quoteInfo.innerHTML += quotes[randomNumber].movie;
document.body.style.backgroundColor = quotes[randomNumber].backColor;


//Button click that generates new value from cars array
var quoteButton = document.getElementById('quoteButton');



quoteButton.onclick = function () {
    
    var randomNumber = Math.floor(Math.random() * quoteNumber);
    mainQuote.innerHTML = '" ' + quotes[randomNumber].phrase + ' "' + '<br>';
    quoteInfo.innerHTML = '- ' + quotes[randomNumber].person + ', ';
    quoteInfo.innerHTML += quotes[randomNumber].movie;
    document.body.style.backgroundColor = quotes[randomNumber].backColor;
    console.log(quotes[randomNumber].phrase);
   
} // end of onclick function


