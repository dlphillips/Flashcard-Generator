var inquirer = require('inquirer'); //for use later
var BasicCard = require('./BasicCard.js');

var columns = ["front", "back"];
var csvFile = 'basicCards.csv';

var newCard = [];
var i = 0;

require("csv-to-array")({
    file: csvFile,
    columns: columns
}, function(err, array) {
    cardTime(array);
});

function cardTime(cardObj) {
	console.log('');
    newCard[i] = new BasicCard(cardObj[i].front, cardObj[i].back);
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
            if (i < cardObj.length) {
                cardTime(cardObj);
            }
        }
    });

}

