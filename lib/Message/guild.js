module.exports = Eris => {
	Object.defineProperty(Eris.Message.prototype, "guild", {
		get: () => this.channel.guild
	});
};
