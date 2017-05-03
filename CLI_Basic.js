
// push questions into arrays FROM OBJECTS for each and play game. hard code questions & answers or store in external file.

var inquirer = require('inquirer'); //for use later
var BasicCard = require('./BasicCard.js');

var newCard = new BasicCard("Name the world's biggest island.", "Greenland");
newCard.showcard();
var newCard = new BasicCard("Where would you find the Sea of Tranquility?", "The Moon");
newCard.showcard();
var newCard = new BasicCard("What is the flattest U.S. state?", "Florida");
newCard.showcard();
var newCard = new BasicCard("Name the largest freshwater lake in the world?", "Lake Superior");
newCard.showcard();
var newCard = new BasicCard("What is the world's longest river?", "Amazon");
newCard.showcard();
var newCard = new BasicCard("Name the world's largest ocean.", "Pacific");
newCard.showcard();
var newCard = new BasicCard("What is Earth's largest continent?", "Asia");
newCard.showcard();
var newCard = new BasicCard("Which U.S. state has the most active volcanoes?", "Alaska");
newCard.showcard();

// if (process.argv[2] === 'BasicCard') {
//     console.log('BasicCard');
//     var newCard = new BasicCard(process.argv[3], process.argv[4]);
//     newCard.showcard();
// } else if (process.argv[2] === 'ClozeCard') {
//     console.log('ClozeCard');
//     var newCard = new ClozeCard(process.argv[3], process.argv[4]);
//     newCard.ccard();
// } else {
//     console.log('no valid command entered');
//     return;
// }

// var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
// firstPresident.showcard();
