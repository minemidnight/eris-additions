module.exports = Eris => {
	Eris.Client.prototype.createEmbed = function(channelID, embed) {
		return this.createMessage(channelID, { embed });
	};
};
