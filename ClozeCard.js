function ClozeCard(text, cloze) {
    if (!this instanceof ClozeCard) {
        return new ClozeCard(text, cloze);
    }
	this.fullText = text;
	this.partial = cloze;
	this.cloze = this.fullText.replace(this.partial,'...');
}

module.exports = ClozeCard; 