function Person(name, quote, image) {
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
);


//var personImages = [Person.image];



var divInfo = document.getElementById('info');
var mainQuote = document.createElement('p');
//var messageText = 'Yo, Check it';

divInfo.appendChild(mainQuote);
mainQuote.innerHTML = lukeSkywalker.image;

var quoteButton = document.getElementById('quoteButton');

for (var i = 0; i <=25; i++){
    
    quoteButton.onclick = function() {
            var randomNumber = Math.floor(Math.random() * 11) + 1;
            mainQuote.innerHTML = randomNumber;
            //divInfo.appendChild(mainQuote);
    
    }//closes onclick function

}//closes for loop



 

