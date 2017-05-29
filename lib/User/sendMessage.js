module.exports = function(Eris) {
	Eris.User.prototype.sendMessage = Eris.Member.prototype.createMessage;
};
