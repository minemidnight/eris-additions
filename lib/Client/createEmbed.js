// Client.createEmbed(channelID, embed) - sends a message with a code block
module.exports = function(Eris) {
	Eris.Client.prototype.createCode = function(channelID, embed) {
		return this.createMessage(this.id, { embed });
	};
};
