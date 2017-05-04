// push questions into arrays FROM OBJECTS for each and play game. hard code questions & answers or store in external file.

var inquirer = require('inquirer'); //for use later
var BasicCard = require('./BasicCard.js');

var newCard = [];
var i = 0;

newCard[0] = new BasicCard("Name the world's biggest island.", "Greenland");
newCard[1] = new BasicCard("Where would you find the Sea of Tranquility?", "The Moon");
newCard[2] = new BasicCard("What is the flattest U.S. state?", "Florida");
newCard[3] = new BasicCard("Name the largest freshwater lake in the world?", "Lake Superior");
newCard[4] = new BasicCard("What is the world's longest river?", "Amazon");
newCard[5] = new BasicCard("Name the world's largest ocean.", "Pacific");
newCard[6] = new BasicCard("What is Earth's largest continent?", "Asia");
newCard[7] = new BasicCard("Which U.S. state has the most active volcanoes?", "Alaska");

function cardTime() {

    newCard[i].showFront();

    var questions = [{
        type: "confirm",
        name: "viewAnswer",
        message: "Show answer?"
    }];

    inquirer.prompt(questions).then(function(answers) {
        if (answers.viewAnswer) {
            newCard[i].showBack();
            i++;
            if (i < newCard.length) {
                cardTime();
            }
        }
    });

}

cardTime();
