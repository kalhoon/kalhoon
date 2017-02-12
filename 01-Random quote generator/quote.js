var quotes = [
    {phrase: 'I\'ll be back',
     person: 'T-100',
     movie: 'Terminator, 1984'},
    
    {phrase: 'Run! Get to the chopper!',
     person: 'Dutch',
     movie: 'Predator, 1987'},
    
    {phrase: 'See you at the party Richter!',
     person: 'Douglas Quaid',
     movie: 'Total Recall, 1990'},
    
    {phrase: 'Don\'t disturb my friend, he\'s dead tired',
     person: 'John Matrix',
     movie: 'Commando, 1985'},
    
    {phrase: 'Hasta la vista, baby',
     person: 'T-100',
     movie: 'Terminator 2, 1990'}
    
    ]

//var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var quoteNumber = quotes.length - 1;
var randomNumber = Math.floor(Math.random() * quoteNumber) + 1;
var i = 0;


var divInfo = document.getElementById('info');
var mainQuote = document.createElement('p');


divInfo.appendChild(mainQuote);
mainQuote.innerHTML = quotes[randomNumber].phrase + '<br>';
mainQuote.innerHTML += '- ' + quotes[randomNumber].person + ', ';
mainQuote.innerHTML += quotes[randomNumber].movie;

//Button click that generates new value from cars array
var quoteButton = document.getElementById('quoteButton');
quoteButton.onclick = function () {
    
   // if (i <= carNumber){
    var randomNumber = Math.floor(Math.random() * quoteNumber) + 1;
    mainQuote.innerHTML = quotes[randomNumber].phrase + '<br>';
    mainQuote.innerHTML += '- ' + quotes[randomNumber].person + ', ';
    mainQuote.innerHTML += quotes[randomNumber].movie;
    //mainQuote.innerHTML = cars[randomNumber];
    //i++;

  //  } else if (i > carNumber){ 
      //s  mainQuote.innerHTML = 'No more Cars bud!';
   // }
} // end of onclick function


