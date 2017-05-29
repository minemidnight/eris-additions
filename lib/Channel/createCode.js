module.exports = function(Eris) {
	Eris.Channel.prototype.createCode = function(code, lang) {
		return this.guild.shard.client.createCode(this.id, code, lang);
	};
};
