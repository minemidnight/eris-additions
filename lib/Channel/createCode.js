// Channel.createCode(code, lang) - sends a message with a code block
module.exports = Eris => {
	Eris.Channel.prototype.createCode = (code, lang) => Eris.Client.createCode(this.id, code, lang);
};
