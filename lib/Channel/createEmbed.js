// Channel.createEmbed(embed) - sends a message with a embed
module.exports = Eris => {
	Eris.Channel.prototype.createEmbed = embed => Eris.Client.createEmbed(this.id, embed);
};
