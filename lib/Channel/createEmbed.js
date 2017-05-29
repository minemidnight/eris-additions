module.exports = function(Eris) {
	Eris.Channel.prototype.createEmbed = function(embed) {
		const client = this.guild ? this.guild.shard.client : this._client;
		return client.createEmbed(this.id, embed);
	};
};
