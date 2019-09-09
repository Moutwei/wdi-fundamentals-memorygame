const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

var cardOne = cards[2];
cardsInPlay.push(cardOne);

console.log("User Flipped " + cardOne);

var cardTwo = cards[3];
cardsInPlay.push(cardTwo);

console.log("User Flipped " + cardTwo);

if(cardsInPlay.length === 2 && (cardsInPlay[0] === cardsInPlay[1])){
	alert("You found a match!");
}
else{
	alert("Sorry, try again.")
}
