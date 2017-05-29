module.exports = Eris => {
	Eris.Member.prototype.sendMessage = function(content, file) {
		this.user.createMessage(content, file);
	};
};
