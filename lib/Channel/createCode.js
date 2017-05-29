module.exports = Eris => {
	Eris.Channel.prototype.createCode = (code, lang) => Eris.Client.createCode(this.id, code, lang);
};
