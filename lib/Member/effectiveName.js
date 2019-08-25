module.exports = Eris => {
	Object.defineProperty(Eris.Member.prototype, 'effectiveName', {
		get: function() {
			return this.nick || this.username;
		}
	});
};