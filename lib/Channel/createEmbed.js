module.exports = Eris => {
	Eris.Channel.prototype.createEmbed = embed => this.guild.shard.client.createEmbed(this.id, embed);
};
