module.exports = Eris => {
	Eris.Client.prototype.createCode = function(channelID, code, lang = "") {
		return this.createMessage(channelID, `\`\`\`${lang}\n${code}\n\`\`\``);
	};
};
