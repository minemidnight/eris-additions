module.exports = function(Eris) {
	Object.defineProperty(Eris.Message.prototype, "guild", {
		get: function() {
			return this.channel.guild;
		}
	});
};
