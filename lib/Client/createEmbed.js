module.exports = Eris => {
	Eris.Client.prototype.createCode = (channelID, embed) => {
		return this.createMessage(this.id, { embed });
	};
};
