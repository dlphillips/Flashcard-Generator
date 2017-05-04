function BasicCard(front, back) {
    if (!this instanceof BasicCard) {
        return new BasicCard(front, back);
    }
    this.front = front;
    this.back = back;
    this.showFront = function() {
        console.log(this.front);
    }
    this.showBack = function() {
        console.log(this.back);
    }
}

module.exports = BasicCard;
