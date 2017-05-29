module.exports = Eris => {
	Eris.Client.prototype.createCode = (channelID, code, lang) => {
		return this.createMessage(this.id, `\`\`\`${lang ? `${lang}\n` : ""}${code}\`\`\``);
	};
};
