// push questions into arrays FROM OBJECTS for each and play game. hard code questions & answers or store in external file.

var inquirer = require('inquirer'); //for use later
var ClozeCard = require('./ClozeCard.js');

// var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
// firstPresident.showcard();


var newCard = new ClozeCard('The country Canada has more than half of all the natural lakes in the world.', 'Canada');
newCard.ccard();
var newCard = new ClozeCard('Australia is the flattest continent.', 'Australia');
newCard.ccard();
var newCard = new ClozeCard('Saudi Arabia is the largest country on the Arabian Peninsula.', 'Saudi Arabia');
newCard.ccard();
var newCard = new ClozeCard('The country Chile accounts for more than half of the western coastline of South America.', 'Chile');
newCard.ccard();
var newCard = new ClozeCard('Sudan is the African nation with the most pyramids.', 'Sudan');
newCard.ccard();
var newCard = new ClozeCard('Africa is the only continent with land in all four hemispheres.', 'Africa');
newCard.ccard();
var newCard = new ClozeCard('Brazil is the most populated nation in South America.', 'Brazil');
newCard.ccard();
var newCard = new ClozeCard('Russia is the largest country in the world in terms of land area.', 'Russia');
newCard.ccard();
