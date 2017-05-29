module.exports = function(Eris) {
	Eris.Client.prototype.createCode = function(channelID, code, lang = "") {
		return this.createMessage(this.id, `\`\`\`${lang}\n${code}\n\`\`\``);
	};
};
