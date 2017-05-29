// Client.createCode(channelID, code, lang) - sends a message with a code block
module.exports = Eris => {
	Eris.Client.prototype.createCode = (channelID, code, lang) => {
		return this.createMessage(this.id, `\`\`\`${lang ? `${lang}\n` : ""}${code}\`\`\``);
	};
};
