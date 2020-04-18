module.exports = Eris => {
	Eris.Channel.prototype.createCode = function(code, lang) {
		const client = this.guild ? this.guild.shard.client : this.client;
		return client.createCode(this.id, code, lang);
	};
};

module.exports.deps = ["Client.createCode"];
