module.exports = Eris => {
	Eris.Channel.prototype.createEmbed = embed => Eris.Client.createEmbed(this.id, embed);
};
