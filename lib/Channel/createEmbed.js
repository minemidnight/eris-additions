module.exports = Eris => {
	Eris.Channel.prototype.createEmbed = function(embed) {
		const client = this.guild ? this.guild.shard.client : this.client;
		return client.createEmbed(this.id, embed);
	};
};

module.exports.deps = ["Client.createEmbed"];
