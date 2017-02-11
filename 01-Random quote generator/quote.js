/*function Person(name, quote, image) {
  this.name = name;
  this.quote = quote;
  this.image = '<img src="images01/' + image + '.jpg">';
}

var darthVader = new Person(
    "Darth Vader", 
    "I find your lack of faith disturbing", 
    "darthVader"
);

var emperor = new Person(
    "Emperor Palpatine", 
    "Not from a Jedi", 
    "emperor"
);

var lukeSkywalker = new Person(
    "Luke Skywalker", 
    "May the force be with you", 
    "lukeSkywalker"
);*/

// var randomNumber = Math.floor(Math.random() * 11) + 1;

/*var quotes = ['Red', 'Blue', 'Green'];

var divInfo = document.getElementById('info');
var mainQuote = document.createElement('p');

divInfo.appendChild(mainQuote);
mainQuote.innerHTML = quotes[0];



var quoteButton = document.getElementById('quoteButton');

quoteButton.onclick = function () {
    
     for (var i = 0; i <= quotes.length; i++){
          
        
        mainQuote.innerHTML = quotes[i];
          divInfo.appendChild(mainQuote);
   
          //  var randomNumber = Math.floor(Math.random() * 11) + 1;
           
    }//closes onclick function

}//closes for loop*/

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var carNumber = cars.length - 1;
var randomNumber = Math.floor(Math.random() * carNumber) + 1;
var i = 0;


var divInfo = document.getElementById('info');
var mainQuote = document.createElement('p');


divInfo.appendChild(mainQuote);
mainQuote.innerHTML = cars[0];

//Button click that generates new value from cars array
var quoteButton = document.getElementById('quoteButton');
quoteButton.onclick = function () {
    
   // if (i <= carNumber){
    var randomNumber = Math.floor(Math.random() * carNumber) + 1;
    mainQuote.innerHTML = cars[randomNumber];
    //i++;

  //  } else if (i > carNumber){ 
      //s  mainQuote.innerHTML = 'No more Cars bud!';
   // }
} // end of onclick function


