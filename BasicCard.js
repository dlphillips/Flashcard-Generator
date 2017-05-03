function BasicCard(front, back) {
    if (!this instanceof BasicCard) {
        return new BasicCard(front, back);
    }
	this.front = front;
	this.back = back;
	this.showcard = function() {
		console.log(this.front);
		console.log(this.back);
	}
}

module.exports = BasicCard;

