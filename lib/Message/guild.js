// Message.guild - guild of a message (if it has one)
module.exports = Eris => {
	Object.defineProperty(Eris.Message.prototype, "guild", {
		get: () => this.channel.guild
	});
};
